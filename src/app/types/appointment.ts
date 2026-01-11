import { Slot } from "./salon";

export interface Appointment {
  id: string;

  salonId: string;
  salonName: string;

  serviceNames: string[];

  /**
   * Booking date (ISO or formatted)
   * Example: 2025-10-12
   */
  date: string;

  /**
   * REQUIRED for reschedule & review flows
   */
  startTime: string; // e.g. "10:00 AM"
  endTime: string;   // e.g. "11:00 AM"

  professionalName?: string;

  /**
   * URL or local asset
   */
  image: string | number;

  /**
   * Controlled by backend
   */
  status: 'Upcoming' | 'Completed' | 'Cancelled' | 'Resheduled';
}



export  interface RescheduleAppointmentPayload {
  appointmentId: string;
  dateId: string;
  slot: Slot;
}

export interface CancelAppointmentPayload {
  appointmentId: string;
  reason?: string;
}