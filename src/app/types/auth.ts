import type { LiveLocation, Gender } from './common';

export interface User {
  id: string;
  mobile: string;

  // optional profile fields
  name?: string;
  city?: string;
  gender?: Gender;

  profileCompleted: boolean;

  liveLocation?: LiveLocation | null;
}

export interface AuthResponse {
  token: string;
  user: User;
}
