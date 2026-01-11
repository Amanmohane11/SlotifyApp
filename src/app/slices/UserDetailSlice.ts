import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { User } from '../types/auth';
import type { UserDetailPayload } from '../types/user';

import { MOCK_USER } from '../../assets/data/user';

/* ---------------- STATE ---------------- */

interface UserDetailState {
  profile: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserDetailState = {
  profile: null,
  loading: false,
  error: null,
};

/* ---------------- THUNKS ---------------- */

/**
 * FETCH user details
 * - Reads from AsyncStorage first
 * - Falls back to MOCK_USER
 */
export const fetchUserDetails = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>('userDetail/fetch', async (_, { rejectWithValue }) => {
  try {
    const storedProfile = await AsyncStorage.getItem('user_profile');

    if (storedProfile) {
      return JSON.parse(storedProfile) as User;
    }

    // First-time app use
    await AsyncStorage.setItem(
      'user_profile',
      JSON.stringify(MOCK_USER)
    );

    return MOCK_USER;
  } catch {
    return rejectWithValue('Failed to load user profile');
  }
});

/**
 * UPDATE user details (partial-safe)
 */
export const submitUserDetails = createAsyncThunk<
  User,
  UserDetailPayload,
  { rejectValue: string }
>('userDetail/submit', async (payload, { rejectWithValue }) => {
  try {
    const storedProfile = await AsyncStorage.getItem('user_profile');
    const existingUser: User = storedProfile
      ? JSON.parse(storedProfile)
      : MOCK_USER;

    const mergedUser: User = {
      ...existingUser,
      ...payload,
    };

    const profileCompleted = Boolean(
      mergedUser.name &&
      mergedUser.city &&
      mergedUser.gender
    );

    const updatedUser: User = {
      ...mergedUser,
      profileCompleted,
    };

    await AsyncStorage.setItem(
      'user_profile',
      JSON.stringify(updatedUser)
    );

    return updatedUser;
  } catch {
    return rejectWithValue('Failed to save user details');
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
      AsyncStorage.removeItem('user_profile');
    },
  },
  extraReducers: builder => {
    builder
      /* FETCH */
      .addCase(fetchUserDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Something went wrong';
      })

      /* SUBMIT */
      .addCase(submitUserDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(submitUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export const { clearUserDetail } = userDetailSlice.actions;
export default userDetailSlice.reducer;
