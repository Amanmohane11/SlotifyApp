import type { LiveLocation, Gender } from './common';

export interface UserDetailPayload {
  name?: string;
  gender?: Gender;
  city?: string;
  liveLocation?: LiveLocation | null;
}
