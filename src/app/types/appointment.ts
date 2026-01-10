export interface Appointment {
  id: string;
  salonId: string;
  salonName: string;
  serviceNames: string[];
  date: string;       // ISO or formatted
  time: string;       // 10:30 AM
  professionalName?: string;
  image: string | number; // URL or local asset
  status: 'upcoming' | 'completed' | 'cancelled';
}
