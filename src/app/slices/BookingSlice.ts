// bookingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ServiceItem, Slot } from '../types/salon';
// import { Category } from 'react-native/types_generated/Libraries/LogBox/Data/parseLogBoxLog';

export type SelectedService = ServiceItem;

interface BookingState {
  selectedServices: SelectedService[];
  professionalId: string | undefined;
  dateId: string | undefined;
  slot: Slot| undefined;
}

const initialState: BookingState = {
  selectedServices: [],
  professionalId: undefined,
  dateId: undefined,
  slot: undefined,
};

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

    setSlot(state, action: PayloadAction<Slot | undefined>) {
      state.slot = action.payload;
    },

    clearBooking() {
      return initialState;
    },
  },
});

export const {  toggleService,
  setProfessional,
  setDate,
  setSlot,
  clearBooking, } = bookingSlice.actions;
export default bookingSlice.reducer;
