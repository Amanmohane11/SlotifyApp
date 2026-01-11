import { User } from "../../app/types/auth";



export const MOCK_USER: User = {
  id: 'user_001',
  mobile: '+91 98765 43210',
  name: 'Aman Kumar',
  city: 'Bengaluru',
  gender: 'male',
  profileCompleted: true,
  liveLocation: {
    latitude: 12.9716,
    longitude: 77.5946,
  },
};
