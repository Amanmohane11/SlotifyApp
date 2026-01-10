import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type {
  Salon,
  Review,
  ServiceCategory,
  Professional,
  AvailableDate,
  Slot,
} from '../types/salon';

/* =========================
   STATE
========================= */

interface SalonDetailState {
  salon: Salon | null;

  services: ServiceCategory[];
  reviews: Review[];

  professionals: Professional[];
  availableDates: AvailableDate[];
  slots: Slot[];

  loading: {
    salon: boolean;
    services: boolean;
    reviews: boolean;
    availability: boolean;
  };

  error: string | null;
}

const initialState: SalonDetailState = {
  salon: null,
  services: [],
  reviews: [],

  professionals: [],
  availableDates: [],
  slots: [],

  loading: {
    salon: false,
    services: false,
    reviews: false,
    availability: false,
  },

  error: null,
};

/* =========================
   THUNKS
========================= */

// SALON DETAIL
export const fetchSalonDetail = createAsyncThunk<
  Salon,
  { salonId: string }
>('salonDetail/fetchSalon', async ({ salonId: _salonId }) => {
  const module = await import('../../assets/data/services');
  return module.salonDummyData as  Salon;
});

// SERVICES
export const fetchSalonServices = createAsyncThunk<
  ServiceCategory[],
  { salonId: string }
>('salonDetail/fetchServices', async ({ salonId: _salonId }) => {
  const module = await import('../../assets/data/salonDetail');
  return module.SERVICES as ServiceCategory[];
});

// REVIEWS
export const fetchSalonReviews = createAsyncThunk<
  Review[],
  { salonId: string }
>('salonDetail/fetchReviews', async ({ salonId: _salonId }) => {
  const module = await import('../../assets/data/salonDetail');
  return module.reviewsData as Review[];
});

// AVAILABILITY
export const fetchSalonAvailability = createAsyncThunk<
  {
    professionals: Professional[];
    availableDates: AvailableDate[];
    slots: Slot[];
  },
  {
    salonId: string;
    date: string;
    professionalId?: string;
    serviceIds: string[];
  }
>('salonDetail/fetchAvailability', 
   async ({
    salonId: _salonId,
    date: _date,
    professionalId: _professionalId,
    serviceIds: _serviceIds,
  }) => {
  const module = await import('../../assets/data/salonDetail');

  return {
    professionals: module.professionalSelectData,
    availableDates: module.availableDates,
    slots: module.slots,
  };
});

/* =========================
   SLICE
========================= */

const salonDetailSlice = createSlice({
  name: 'salonDetail',
  initialState,
  reducers: {
    clearSalonDetail: () => initialState,

    clearAvailability(state) {
      state.availableDates = [];
      state.slots = [];
    },
  },
  extraReducers: (builder) => {
    builder

      /* SALON */
      .addCase(fetchSalonDetail.pending, (state) => {
        state.loading.salon = true;
      })
      .addCase(fetchSalonDetail.fulfilled, (state, action) => {
        state.loading.salon = false;
        state.salon = action.payload;
      })
      .addCase(fetchSalonDetail.rejected, (state, action) => {
        state.loading.salon = false;
        state.error = action.error.message ?? null;
      })

      /* SERVICES */
      .addCase(fetchSalonServices.pending, (state) => {
        state.loading.services = true;
      })
      .addCase(fetchSalonServices.fulfilled, (state, action) => {
        state.loading.services = false;
        state.services = action.payload;
      })
      .addCase(fetchSalonServices.rejected, (state, action) => {
        state.loading.services = false;
        state.error = action.error.message ?? null;
      })

      /* REVIEWS */
      .addCase(fetchSalonReviews.pending, (state) => {
        state.loading.reviews = true;
      })
      .addCase(fetchSalonReviews.fulfilled, (state, action) => {
        state.loading.reviews = false;
        state.reviews = action.payload;
      })
      .addCase(fetchSalonReviews.rejected, (state, action) => {
        state.loading.reviews = false;
        state.error = action.error.message ?? null;
      })

      /* AVAILABILITY */
      .addCase(fetchSalonAvailability.pending, (state) => {
        state.loading.availability = true;
      })
      .addCase(fetchSalonAvailability.fulfilled, (state, action) => {
        state.loading.availability = false;
        state.professionals = action.payload.professionals;
        state.availableDates = action.payload.availableDates;
        state.slots = action.payload.slots;
      })
      .addCase(fetchSalonAvailability.rejected, (state, action) => {
        state.loading.availability = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const { clearSalonDetail, clearAvailability } =
  salonDetailSlice.actions;

export default salonDetailSlice.reducer;
