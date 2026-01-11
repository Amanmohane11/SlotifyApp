// bookingSlice.ts
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';
import { ServiceItem, Slot } from '../types/salon';
import { CancelAppointmentPayload } from '../types/appointment';

/* ---------------- TYPES ---------------- */

export type SelectedService = ServiceItem;

interface CreateOrUpdateAppointmentPayload {
  salonId: string;
  professionalId: string;
  dateId: string;
  slot: Slot;
  services: SelectedService[];
  appointmentId?: string; // present ONLY in reschedule flow
}

interface BookingState {
  selectedServices: SelectedService[];
  professionalId: string | null;
  dateId: string | null;
  slot: Slot | null;

  appointmentId: string | null;     // existing appointment (reschedule)
  isRescheduleFlow: boolean;

  creatingAppointment: boolean;
  cancellingAppointment: boolean;
  appointmentError: string | null;
}

/* ---------------- INITIAL STATE ---------------- */

const initialState: BookingState = {
  selectedServices: [],
  professionalId: null,
  dateId: null,
  slot: null,

  appointmentId: null,
  isRescheduleFlow: false,

  creatingAppointment: false,
  cancellingAppointment: false,
  appointmentError: null,
};

/* ---------------- ASYNC THUNKS ---------------- */

/**
 * Used for:
 * - New booking (POST)
 * - Reschedule booking (PATCH)
 */
export const submitAppointment = createAsyncThunk<
  { appointmentId: string },
  CreateOrUpdateAppointmentPayload,
  { rejectValue: string }
>('booking/submitAppointment', async (payload, { rejectWithValue }) => {
  try {
    const isReschedule = Boolean(payload.appointmentId);

    const url = isReschedule
      ? `https://api.yourdomain.com/appointments/${payload.appointmentId}`
      : 'https://api.yourdomain.com/appointments';

    const method = isReschedule ? 'PATCH' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        salonId: payload.salonId,
        professionalId: payload.professionalId,
        dateId: payload.dateId,
        slot: payload.slot,
        services: payload.services,
        status: isReschedule ? 'rescheduled' : 'confirmed',
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      return rejectWithValue(err.message || 'Failed to submit appointment');
    }

    const data = await res.json();
    return { appointmentId: data.id };
  } catch {
    return rejectWithValue('Network error');
  }
});

export const cancelAppointment = createAsyncThunk<
  { appointmentId: string },
  CancelAppointmentPayload,
  { rejectValue: string }
>('booking/cancelAppointment', async (payload, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `https://api.yourdomain.com/appointments/${payload.appointmentId}/cancel`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason: payload.reason }),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      return rejectWithValue(err.message || 'Failed to cancel appointment');
    }

    const data = await res.json();
    return { appointmentId: data.id };
  } catch {
    return rejectWithValue('Network error');
  }
});

/* ---------------- SLICE ---------------- */

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    toggleService(state, action: PayloadAction<SelectedService>) {
      const exists = state.selectedServices.find(
        s => s.id === action.payload.id
      );

      if (exists) {
        state.selectedServices = state.selectedServices.filter(
          s => s.id !== action.payload.id
        );
      } else {
        state.selectedServices.push(action.payload);
      }
    },

    clearServices(state) {
      state.selectedServices = [];
    },

    setProfessional(state, action: PayloadAction<string>) {
      state.professionalId = action.payload;
    },

    setDate(state, action: PayloadAction<string>) {
      state.dateId = action.payload;
    },

    setSlot(state, action: PayloadAction<Slot | null>) {
      state.slot = action.payload;
    },

    /** Called when user taps "Reschedule" */
    startReschedule(state, action: PayloadAction<{ appointmentId: string }>) {
      state.isRescheduleFlow = true;
      state.appointmentId = action.payload.appointmentId;
    },

    clearBooking() {
      return initialState;
    },
  },

  extraReducers: builder => {
    builder
      /* ---------- CREATE / RESCHEDULE ---------- */
      .addCase(submitAppointment.pending, state => {
        state.creatingAppointment = true;
        state.appointmentError = null;
      })
      .addCase(submitAppointment.fulfilled, (state, action) => {
        state.creatingAppointment = false;
        state.appointmentId = action.payload.appointmentId;
        state.isRescheduleFlow = false;
      })
      .addCase(submitAppointment.rejected, (state, action) => {
        state.creatingAppointment = false;
        state.appointmentError =
          action.payload || 'Something went wrong';
      })

      /* ---------- CANCEL ---------- */
      .addCase(cancelAppointment.pending, state => {
        state.cancellingAppointment = true;
        state.appointmentError = null;
      })
      .addCase(cancelAppointment.fulfilled, state => {
        state.cancellingAppointment = false;
        return initialState;
      })
      .addCase(cancelAppointment.rejected, (state, action) => {
        state.cancellingAppointment = false;
        state.appointmentError =
          action.payload || 'Failed to cancel booking';
      });
  },
});

/* ---------------- EXPORTS ---------------- */

export const {
  toggleService,
  clearServices,
  setProfessional,
  setDate,
  setSlot,
  startReschedule,
  clearBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
