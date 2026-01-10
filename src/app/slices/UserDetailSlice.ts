import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { RootState } from '../store';
import type { User } from '../types/auth';
import { UserDetailPayload } from '../types/user';



/* ---------------- STATE ---------------- */

interface UserDetailState {
  profile: User | null;        // ✅ FIXED
  loading: boolean;
  error: string | null;
}

/* ---------------- INITIAL STATE ---------------- */

const initialState: UserDetailState = {
  profile: null,
  loading: false,
  error: null,
};

/* ---------------- API ---------------- */

const API_BASE_URL = 'https://your-api.com/api';

/* ---------------- THUNKS ---------------- */

/**
 * ADD / UPDATE user details (POST)
 */
export const submitUserDetails = createAsyncThunk<
  User,
  UserDetailPayload,
  { state: RootState; rejectValue: string }
>('userDetail/submit', async (payload, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;

    if (!token) {
      return rejectWithValue('User not authenticated');
    }

    const response = await fetch(`${API_BASE_URL}/user/details`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload), // includes liveLocation
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      return rejectWithValue(
        errorBody?.message ?? 'Failed to save user details',
      );
    }

    const updatedUser: User = await response.json();

    // Persist user (used by restoreSession)
    await AsyncStorage.setItem('user', JSON.stringify(updatedUser));

    return updatedUser;
  } catch {
    return rejectWithValue('Network error. Please try again.');
  }
});

/**
 * FETCH user details from DB (GET)
 */
export const fetchUserDetails = createAsyncThunk<
  User,
  void,
  { state: RootState; rejectValue: string }
>('userDetail/fetch', async (_, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;

    if (!token) {
      return rejectWithValue('User not authenticated');
    }

    const response = await fetch(`${API_BASE_URL}/user/details`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return rejectWithValue('Failed to fetch user details');
    }

    const user: User = await response.json();

    await AsyncStorage.setItem('user', JSON.stringify(user));

    return user;
  } catch {
    return rejectWithValue('Network error. Please try again.');
  }
});

/* ---------------- SLICE ---------------- */

const userDetailSlice = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    clearUserDetail: state => {
      state.profile = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      /* SUBMIT */
      .addCase(submitUserDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload; // ✅ store full user
      })
      .addCase(submitUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Something went wrong';
      })

      /* FETCH */
      .addCase(fetchUserDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload; // ✅ store full user
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export const { clearUserDetail } = userDetailSlice.actions;
export default userDetailSlice.reducer;
