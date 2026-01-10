/* =========================
   CORE ENTITIES
========================= */

export interface Salon {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  isFavorite: boolean;
  type: string;

  latitude: number;
  longitude: number;

  images?: string[];
  imageUrl?: string;

  address?: Address;
  availability?: SalonAvailability[];

  professionals?: Professional[];
}

/* =========================
   ADDRESS
========================= */

export interface Address {
  line1?: string;
  area?: string;
  city?: string;
  pincode?: string;
}

/* =========================
   AVAILABILITY (DISPLAY ONLY)
========================= */
/**
 * NOTE:
 * This is for showing salon timings on detail page.
 * Slot calculation must NOT use this directly.
 */
export interface SalonAvailability {
  day: string;               // Monday, Tuesday
  isOpen: boolean;

  startTime?: string;        // "10:00"
  endTime?: string;          // "21:30"
  displayTime?: string;      // "10:00 AM - 9:30 PM"
}

/* =========================
   PROFESSIONAL
========================= */

export interface Professional {
  id: string;
  name: string;
  experience?: number;       // years
  expertise?: string[];      // ["Haircut", "Color"]
  imageUrl?: string;
}

/* =========================
   SERVICES
========================= */

export interface ServiceItem {
  id: string;
  name: string;
  time: number;              // minutes
  price: number;             // numeric value
  category: string;
}

export interface ServiceCategory {
  title: string;             // Hair, Massage, Nails
  data: ServiceItem[];
}

/* =========================
   REVIEWS
========================= */

export interface Review {
  id: string;
  userName: string;
  professionalName?: string;
  rating: number;            // 1–5
  comment: string;
  date?: string;             // ISO string
}

/* =========================
   AVAILABILITY (BOOKING)
========================= */

export interface AvailableDate {
  id: string;                // "2026-01-12"
  label: string;             // "Mon, 12 Jan"
  date: string;              // ISO date
}

export interface Slot {
  start: string;             // "10:00"
  end: string;               // "11:30"
  isAvailable: boolean;
}

/* =========================
   HOME / FAVORITES (UI)
========================= */

export interface HomeSalon {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;

  imageUrl?: string;
  images?: string[];

  isFavorite: boolean;
}

export interface FavoriteSalon { id: string;
   name: string; 
   category: string; 
   rating: number; 
   type: string; 
   reviewCount: number; 
   imageUrl?: string;
    images?: string[]; 
    isFavorite: true; // 👈 IMPORTANT: always true here 
  }