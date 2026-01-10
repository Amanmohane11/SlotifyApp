import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  newlyJoinedSalons,
  recommendedSalons,
  trendingSalons,
} from '../../assets/data/salonDetail';
import type { FavoriteSalon, HomeSalon } from '../types/salon';

/* ---------------- TYPES ---------------- */

type HomeSection = 'recommended' | 'trending' | 'newlyJoined' | null;

interface HomeState {
  loading: boolean;
  error: string | null;

  query: string;
  rangeKm: number;
  activeSection: HomeSection;

  recommended: HomeSalon[];
  trending: HomeSalon[];
  newlyJoined: HomeSalon[];

  favorites: FavoriteSalon[]; // ✅ REQUIRED
}

interface HomeSalonsPayload {
  recommended: HomeSalon[];
  trending: HomeSalon[];
  newlyJoined: HomeSalon[];
}

interface FavoriteSalonsPayload {
  favorites: FavoriteSalon[];
}

/* ---------------- INITIAL STATE ---------------- */

const initialState: HomeState = {
  loading: false,
  error: null,

  query: '',
  rangeKm: 5,
  activeSection: null,

  recommended: [],
  trending: [],
  newlyJoined: [],

  favorites: [], // ✅ REQUIRED
};

/* ---------------- THUNKS ---------------- */

// HOME SALONS
export const fetchHomeSalons = createAsyncThunk<
  HomeSalonsPayload,
  void,
  { rejectValue: string }
>('home/fetchSalons', async (_, { rejectWithValue }) => {
  try {
    return {
      recommended: recommendedSalons as HomeSalon[],
      trending: trendingSalons as HomeSalon[],
      newlyJoined: newlyJoinedSalons as HomeSalon[],
    };
  } catch {
    return rejectWithValue('Unable to load home data');
  }
});

// FAVORITES
export const fetchFavoriteSalons = createAsyncThunk<
  FavoriteSalonsPayload,
  void,
  { rejectValue: string }
>('home/fetchFavorites', async (_, { rejectWithValue }) => {
  try {
    const module = await import('../../assets/data/saloonData');

    return {
      favorites: module.favoriteSalons as FavoriteSalon[],
    };
  } catch {
    return rejectWithValue('Unable to load favorite salons');
  }
});

export const toggleFavoriteSalon = createAsyncThunk<
  { salonId: string; isFavorite: boolean },
  string,
  { rejectValue: string }
>(
  'home/toggleFavorite',
  async (salonId, { getState, rejectWithValue }) => {
    try {
      const state: any = getState();
      const isAlreadyFavorite = state.home.favorites.some(
        (f: any) => f.id === salonId
      );

      // ⛔ Replace with real API later
      // if (isAlreadyFavorite) await api.removeFavorite(salonId)
      // else await api.addFavorite(salonId)

      return {
        salonId,
        isFavorite: !isAlreadyFavorite,
      };
    } catch {
      return rejectWithValue('Unable to update favorite');
    }
  }
);


/* ---------------- SLICE ---------------- */

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },

    setRangeKm(state, action: PayloadAction<number>) {
      state.rangeKm = action.payload;
    },

    setActiveSection(state, action: PayloadAction<HomeSection>) {
      state.activeSection = action.payload;
    },

    resetSearch(state) {
      state.query = '';
      state.rangeKm = 5;
      state.activeSection = null;
    },
  },
  extraReducers: builder => {
    builder
      /* HOME SALONS */
      .addCase(fetchHomeSalons.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeSalons.fulfilled, (state, action) => {
        state.loading = false;
        state.recommended = action.payload.recommended;
        state.trending = action.payload.trending;
        state.newlyJoined = action.payload.newlyJoined;
      })
      .addCase(fetchHomeSalons.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Something went wrong';
      })

      /* FAVORITES */
      .addCase(fetchFavoriteSalons.pending, state => {
        state.loading = true;
      })
      .addCase(fetchFavoriteSalons.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload.favorites;
      })
      .addCase(fetchFavoriteSalons.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Unable to load favorites';
      })


.addCase(toggleFavoriteSalon.fulfilled, (state, action) => {
  const { salonId, isFavorite } = action.payload;

  if (isFavorite) {
    const salon =
      state.recommended.find(s => s.id === salonId) ||
      state.trending.find(s => s.id === salonId) ||
      state.newlyJoined.find(s => s.id === salonId);

    if (salon && !state.favorites.some(f => f.id === salonId)) {
      state.favorites.push({
        id: salon.id,
        name: salon.name,
        category: salon.category,
        rating: salon.rating,
        reviewCount: salon.reviewCount,
        type: salon.category, // fallback
        imageUrl: salon.imageUrl,
        images: salon.images,
        isFavorite: true,
      });
    }
  } else {
    state.favorites = state.favorites.filter(
      f => f.id !== salonId
    );
  }
});

  },
});

/* ---------------- EXPORTS ---------------- */

export const {
  setQuery,
  setRangeKm,
  setActiveSection,
  resetSearch,
} = homeSlice.actions;

export default homeSlice.reducer;
