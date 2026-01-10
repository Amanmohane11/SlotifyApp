import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AuthResponse, User } from '../types/auth';
// import type { RootState } from '../store';
import { submitUserDetails } from './userDetailSlice';

/* ---------------- STATE ---------------- */

interface AuthState {
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  isLoggedIn: false,
  token: null,
  user: null,
};

/* ---------------- API ---------------- */

const API_BASE_URL = 'https://your-api.com/api';

/* ---------------- THUNKS ---------------- */

/** OTP Verify */
export const verifyOtp = createAsyncThunk<
  AuthResponse,
  { mobile: string; otp: string },
  { rejectValue: string }
>('auth/verifyOtp', async (payload, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error();
    }

    const data: AuthResponse = await response.json();

    // Persist session
    await AsyncStorage.setItem('token', data.token);
    await AsyncStorage.setItem('user', JSON.stringify(data.user));

    return data;
  } catch {
    return rejectWithValue('Invalid OTP');
  }
});

/** Restore session on app start */
export const restoreSession = createAsyncThunk<
  AuthResponse,
  void,
  { rejectValue: string }
>('auth/restoreSession', async (_, { rejectWithValue }) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const userString = await AsyncStorage.getItem('user');

    if (!token || !userString) {
      throw new Error();
    }

    return {
      token,
      user: JSON.parse(userString),
    };
  } catch {
    return rejectWithValue('Session expired');
  }
});

/* ---------------- SLICE ---------------- */

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
      AsyncStorage.clear();
    },
  },
  extraReducers: builder => {
    builder
      /* OTP Verify */
      .addCase(verifyOtp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Login failed';
      })

      /* Restore session */
      .addCase(restoreSession.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })

      /* 🔥 IMPORTANT: sync user after profile completion */
      .addCase(submitUserDetails.fulfilled, (state, action) => {
        state.user = {
          ...action.payload,
          profileCompleted: true,
        };
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
