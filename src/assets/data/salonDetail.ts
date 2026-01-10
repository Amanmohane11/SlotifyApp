//  import prof from '../images/prof1.jpg'

import { Appointment } from "../../app/types/appointment";
import type { AvailableDate, Salon, Slot } from "../../app/types/salon";
import { barberServices, facialServices, hairServices, massageServices, nailServices } from "./services";

export const reviewsData = [
  {
    userName: 'Sarah M.',
    professionalName: 'Anna',
    rating: 5,
    comment: 'Amazing service and very friendly staff.',
  },
  {
    userName: 'David Chen',
    professionalName: 'Mark',
    rating: 4,
    comment: 'Great haircut, will visit again.',
  },
  {
    userName: 'Priya Sharma',
    professionalName: 'Sofia',
    rating: 5,
    comment: 'Loved the facial treatment!',
  },
  // add more dummy reviews
];

export const professionalsData = [
  {
    id: '1',
    name: 'Anna',
    experience: 6,
    expertise: 'Hair Styling',
    imageUrl: require('../images/prof1.jpg'),
  },
  {
    id: '2',
    name: 'Mark',
    experience: 8,
    expertise: 'Color Expert',
    imageUrl: require('../images/prof2.jpg'),
  },
  {
    id: '3',
    name: 'Sofia',
    experience: 5,
    expertise: 'Facial & Spa',
    imageUrl: require('../images/prof3.jpg'),
  },
];

// assets/data/pastBookings.ts

export const pastBookingsData: Appointment[] =[
  {
    id: 'past_001',
    salonId: 'salon_001',
    salonName: 'Chic Cuts',
    serviceNames: ['Nail Art'],
    date: '2024-12-10',
    time: '3:30 PM',
    professionalName: 'Neha Kapoor',
    status: 'completed',
    image: require('../images/saloonImage.jpg'),
  },
  {
    id: 'past_002',
    salonId: 'salon_002',
    salonName: 'The Golden Comb',
    serviceNames: ['Haircut', 'Styling'],
    date: '2024-11-25',
    time: '5:00 PM',
    professionalName: 'Amit Sharma',
    status: 'completed',
    image: require('../images/salonImage2.jpg'),
  },
];


export const servicesData = {
  hair: hairServices,
  nails: nailServices,
  massage:massageServices,
  facial:facialServices,
  barber:barberServices
};

export const professionalSelectData = [
  { id: 'random', isRandom: true, name: 'Any Pro' },
  {
    id: '1',
    name: 'Sophia',
    image: require('../images/prof1.jpg'),
  },
  {
    id: '2',
    name: 'Daniel',
    image: require('../images/prof2.jpg'),
  },
  {
    id: '3',
    name: 'Emma',
    image: require('../images/prof3.jpg'),
  },
];

export const slots: Slot[] = [
  { start: '09:00', end: '10:00', isAvailable: true },
  { start: '10:30', end: '11:30', isAvailable: true },
  { start: '12:00', end: '13:00', isAvailable: false },
  { start: '13:30', end: '14:30', isAvailable: true },
  { start: '15:30', end: '16:30', isAvailable: true },
  { start: '16:45', end: '17:45', isAvailable: false },
];

export const availableDates: AvailableDate[] = [
  {
    id: '2025-01-12',
    label: 'Mon, 12 Jan',
    date: '2025-01-12',
  },
  {
    id: '2025-01-13',
    label: 'Tue, 13 Jan',
    date: '2025-01-13',
  },
  {
    id: '2025-01-14',
    label: 'Wed, 14 Jan',
    date: '2025-01-14',
  },
];

export const CATEGORIES = ['Hair', 'Nails', 'Massage', 'Face & Skin', 'Waxing'];

export const SERVICES = [
  {
    title: 'Hair',
    data: [
      { name: 'Haircut & Styling', time: 60, price: 150 },
      { name: 'Hair Wash & Blow Dry', time: 45, price: 80 },
      { name: 'Hair Spa Treatment', time: 75, price: 200 },
      { name: 'Deep Conditioning', time: 30, price: 40 },
      { name: 'Root Touch Up', time: 60, price: 120 },
      { name: 'Global Hair Color', time: 120, price: 300 },
      { name: 'Highlights / Balayage', time: 150, price: 400 },
      { name: 'Keratin Treatment', time: 180, price: 600 },
      { name: 'Hair Smoothening', time: 150, price: 500 },
      { name: 'Beard Trim', time: 20, price: 30 },
    ],
  },

  {
    title: 'Massage',
    data: [
      { name: 'Swedish Massage', time: 90, price: 400 },
      { name: 'Deep Tissue Massage', time: 90, price: 450 },
      { name: 'Hot Stone Massage', time: 95, price: 500 },
      { name: 'Aromatherapy Massage', time: 75, price: 350 },
      { name: 'Relax Therapy', time: 75, price: 0 }, // special case
      { name: 'Head & Shoulder Massage', time: 30, price: 120 },
      { name: 'Foot Reflexology', time: 40, price: 150 },
    ],
  },

  {
    title: 'Face & Skin',
    data: [
      { name: 'Basic Cleanup', time: 30, price: 60 },
      { name: 'Fruit Facial', time: 45, price: 120 },
      { name: 'Gold Facial', time: 60, price: 200 },
      { name: 'Anti-Aging Facial', time: 75, price: 300 },
      { name: 'Acne Treatment', time: 60, price: 250 },
      { name: 'Hydra Facial', time: 75, price: 350 },
    ],
  },

  {
    title: 'Waxing',
    data: [
      { name: 'Eyebrow Wax', time: 10, price: 20 },
      { name: 'Upper Lip Wax', time: 10, price: 15 },
      { name: 'Full Arms Wax', time: 30, price: 80 },
      { name: 'Full Legs Wax', time: 45, price: 120 },
      { name: 'Underarms Wax', time: 15, price: 40 },
      { name: 'Full Body Wax', time: 90, price: 300 },
    ],
  },

  {
    title: 'Nails',
    data: [
      { name: 'Manicure', time: 30, price: 50 },
      { name: 'Pedicure', time: 45, price: 70 },
      { name: 'Gel Manicure', time: 45, price: 90 },
      { name: 'Spa Pedicure', time: 60, price: 120 },
      { name: 'Nail Extensions', time: 90, price: 200 },
      { name: 'Nail Art (Per Nail)', time: 10, price: 0 }, // special case
    ],
  },
];



export const bookingSummaryData = {
  professional: {
    name: 'John Doe',
    image: require('../images/prof1.jpg'),
  },
  service: {
    name: 'Haircut & Styling',
  },
  slot: {
    time: '12:00 PM',
    dateLabel: '13 Tue',
  },
};



export const recommendedSalons: Partial<Salon>[] = [
  {
    id: '1',
    name: 'The Golden Comb',
    category: 'Hair & Beauty',
    type: 'Unisex',
    rating: 4.8,
    imageUrl: require('../images/saloonImage.jpg'),
  },
  {
    id: '2',
    name: 'Elite Spa',
    category: 'Spa & Wellness',
    type: 'Male Only',
    rating: 4.6,
    imageUrl: require('../images/saloonImage.jpg'),
  },
];

export const trendingSalons: Partial<Salon>[] = [
  {
    id: '3',
    name: 'Style Studio',
    category: 'Hair & Styling',
    type: 'Unisex',
    rating: 4.9,
    imageUrl: require('../images/saloonImage.jpg'),
  },
];

export const newlyJoinedSalons: Partial<Salon>[] = [
  {
    id: '4',
    name: 'Urban Cuts',
    category: 'Barber',
    type: 'Male Only',
    rating: 4.5,
    imageUrl: require('../images/saloonImage.jpg'),
  },
];

