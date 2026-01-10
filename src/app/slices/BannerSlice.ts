import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Banner } from '../types/banner';
import { dummyBanners } from '../../assets/data/saloonData2';

/* ---------------- STATE ---------------- */

interface BannerState {
  loading: boolean;
  error: string | null;
  banners: Banner[];
}

/* ---------------- INITIAL STATE ---------------- */

const initialState: BannerState = {
  loading: false,
  error: null,
  banners: dummyBanners, // ✅ directly assign dummy data
};

/* ---------------- THUNK (for future API) ---------------- */

export const fetchBanners = createAsyncThunk<
  Banner[],
  void,
  { rejectValue: string }
>('banner/fetchBanners', async (_, { rejectWithValue }) => {
  try {
    // ✅ using dummy data for now
    return dummyBanners;
  } catch {
    return rejectWithValue('Unable to load banners');
  }
});

/* ---------------- SLICE ---------------- */

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBanners.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export default bannerSlice.reducer;
