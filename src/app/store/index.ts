import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/AuthSlice';
import userDetailReducer from '../slices/UserDetailSlice';
import homeReducer from '../slices/HomeSlice';
import BannerReducer from '../slices/BannerSlice';
import saloonDetailReducer from '../slices/SaloonDetailSlice';
import appointmentSlice from '../slices/appointmentSlice';
import bookingSlice from '../slices/BookingSlice';



export const store = configureStore({
  reducer: {
    auth: authReducer,
    userDetail: userDetailReducer,
    home: homeReducer,
    banner: BannerReducer,
    saloonDetail:saloonDetailReducer,
    appointment:appointmentSlice,
    booking:bookingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
