import type { LiveLocationPayload } from './user';

/* ---------------- USER ---------------- */

export interface User {
  id: string;
  mobile: string;

  // optional profile fields
  name?: string;
  city?: string;
  gender?: 'male' | 'female' | 'other';

  // profile status
  profileCompleted: boolean;

  // ✅ ADD THIS
  liveLocation?: LiveLocationPayload | null;
}

/* ---------------- AUTH RESPONSE ---------------- */

export interface AuthResponse {
  token: string;
  user: User;
}
