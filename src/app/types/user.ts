export interface LiveLocationPayload {
  latitude: number;
  longitude: number;
}

export interface UserDetailPayload {
  name: string;
  gender: 'male' | 'female' | 'other';
  city: string;
  liveLocation?: LiveLocationPayload;
}
