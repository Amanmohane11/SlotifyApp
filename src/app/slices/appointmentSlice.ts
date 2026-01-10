import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Appointment } from '../types/appointment';

/* ---------------- STATE ---------------- */

interface AppointmentState {
  upcoming: Appointment[];
  past: Appointment[];

  loading: {
    upcoming: boolean;
    past: boolean;
  };

  error: string | null;
}

const initialState: AppointmentState = {
  upcoming: [],
  past: [],
  loading: {
    upcoming: false,
    past: false,
  },
  error: null,
};

/* ---------------- THUNKS ---------------- */

// UPCOMING BOOKINGS
export const fetchUpcomingAppointments = createAsyncThunk<
  Appointment[],
  void,
  { rejectValue: string }
>('appointments/fetchUpcoming', async (_, { rejectWithValue }) => {
  try {
    const module = await import('../../assets/data/saloonData');
    return module.upcomingAppointments as Appointment[];
  } catch {
    return rejectWithValue('Unable to load upcoming appointments');
  }
});

// PAST BOOKINGS
export const fetchPastAppointments = createAsyncThunk<
  Appointment[],
  void,
  { rejectValue: string }
>('appointments/fetchPast', async (_, { rejectWithValue }) => {
  try {
    const module = await import('../../assets/data/salonDetail');
    return module.pastBookingsData as Appointment[];
  } catch {
    return rejectWithValue('Unable to load past appointments');
  }
});

/* ---------------- SLICE ---------------- */

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    clearAppointments: () => initialState,
  },
  extraReducers: builder => {
    builder
      /* UPCOMING */
      .addCase(fetchUpcomingAppointments.pending, state => {
        state.loading.upcoming = true;
        state.error = null;
      })
      .addCase(fetchUpcomingAppointments.fulfilled, (state, action) => {
        state.loading.upcoming = false;
        state.upcoming = action.payload;
      })
      .addCase(fetchUpcomingAppointments.rejected, (state, action) => {
        state.loading.upcoming = false;
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Something went wrong';
      })

      /* PAST */
      .addCase(fetchPastAppointments.pending, state => {
        state.loading.past = true;
        state.error = null;
      })
      .addCase(fetchPastAppointments.fulfilled, (state, action) => {
        state.loading.past = false;
        state.past = action.payload;
      })
      .addCase(fetchPastAppointments.rejected, (state, action) => {
        state.loading.past = false;
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Something went wrong';
      });
  },
});

export const { clearAppointments } = appointmentSlice.actions;
export default appointmentSlice.reducer;
