import { Salon } from "../../app/types/salon";

export interface ServiceItem {
  name: string;
  time: number; // minutes
  price: number; // numeric currency
}

export const barberServices: ServiceItem[] = [
  { name: 'Men Haircut', time: 30, price: 400 },
  { name: 'Beard Trim', time: 20, price: 250 },
  { name: 'Beard Styling', time: 30, price: 400 },
  { name: 'Classic Shave', time: 30, price: 300 },
  { name: 'Premium Shave', time: 45, price: 600 },
  { name: 'Haircut + Beard', time: 45, price: 650 },
  { name: 'Head Massage', time: 20, price: 300 },
];

export const facialServices: ServiceItem[] = [
  { name: 'Basic Clean-Up', time: 30, price: 900 },
  { name: 'Fruit Facial', time: 45, price: 1500 },
  { name: 'Gold Facial', time: 60, price: 2200 },
  { name: 'Anti-Aging Facial', time: 75, price: 3000 },
  { name: 'Hydra Facial', time: 60, price: 4500 },
  { name: 'Acne Control Facial', time: 60, price: 2500 },
  { name: 'Brightening Facial', time: 60, price: 2800 },
];

export const nailServices: ServiceItem[] = [
  { name: 'Classic Manicure', time: 30, price: 800 },
  { name: 'Classic Pedicure', time: 45, price: 1200 },
  { name: 'Gel Manicure', time: 45, price: 1500 },
  { name: 'Gel Pedicure', time: 60, price: 1800 },
  { name: 'Acrylic Nail Extensions', time: 90, price: 3500 },
  { name: 'Nail Art (Basic)', time: 30, price: 700 },
  { name: 'Nail Art (Advanced)', time: 60, price: 1500 },
  { name: 'Nail Extension Removal', time: 30, price: 500 },
];

export const massageServices: ServiceItem[] = [
  { name: 'Head Massage', time: 30, price: 600 },
  { name: 'Swedish Massage', time: 60, price: 2500 },
  { name: 'Deep Tissue Massage', time: 60, price: 3000 },
  { name: 'Aromatherapy Massage', time: 60, price: 2800 },
  { name: 'Hot Stone Massage', time: 75, price: 3500 },
  { name: 'Back & Shoulder Massage', time: 30, price: 1200 },
  { name: 'Foot Reflexology', time: 45, price: 1500 },
];

export const hairServices: ServiceItem[] = [
  { name: 'Women Haircut', time: 60, price: 1200 },
  { name: 'Men Haircut', time: 30, price: 500 },
  { name: 'Kids Haircut', time: 30, price: 400 },
  { name: 'Hair Wash & Blow Dry', time: 30, price: 600 },
  { name: 'Hair Spa', time: 60, price: 1500 },
  { name: 'Deep Conditioning', time: 30, price: 900 },
  { name: 'Keratin Treatment', time: 120, price: 4500 },
  { name: 'Hair Smoothening', time: 150, price: 5500 },
  { name: 'Root Touch-Up Color', time: 90, price: 2000 },
  { name: 'Global Hair Color', time: 120, price: 3500 },
];


// src/data/salonDummyData.ts
// import type { Salon } from '../../app/types/salon';

export const salonDummyData: Salon = {
  id: 'salon_001',

  name: 'The Golden Comb',
  category: 'Hair & Beauty',
  type: 'Unisex Salon',

  rating: 4.8,
  reviewCount: 1264,
  isFavorite: false,

  latitude: 28.6139,
  longitude: 77.2090,

  images: [
    'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f',
    'https://images.unsplash.com/photo-1600948836101-f9ffda59d250',
    'https://images.unsplash.com/photo-1580618672591-eb180b1a973f',
    'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1',
  ],

  address: {
    line1: '221B Market Street',
    area: 'Connaught Place',
    city: 'New Delhi',
    pincode: '110001',
  },

  /* ======================
     AVAILABILITY (DISPLAY)
  ====================== */
  availability: [
    {
      day: 'Monday',
      isOpen: true,
      startTime: '08:30',
      endTime: '21:00',
      displayTime: '8:30 AM - 9:00 PM',
    },
    {
      day: 'Tuesday',
      isOpen: true,
      startTime: '08:30',
      endTime: '21:00',
      displayTime: '8:30 AM - 9:00 PM',
    },
    {
      day: 'Wednesday',
      isOpen: true,
      startTime: '08:30',
      endTime: '21:00',
      displayTime: '8:30 AM - 9:00 PM',
    },
    {
      day: 'Friday',
      isOpen: true,
      startTime: '10:00',
      endTime: '20:00',
      displayTime: '10:00 AM - 8:00 PM',
    },
  ],

  /* ======================
     PROFESSIONALS
  ====================== */
  professionals: [
    {
      id: 'pro_001',
      name: 'Amit Sharma',
      experience: 8,
      expertise: ['Haircut', 'Styling', 'Coloring'],
      imageUrl:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
    },
    {
      id: 'pro_002',
      name: 'Rohit Verma',
      experience: 6,
      expertise: ['Beard Grooming', 'Shaving'],
      imageUrl:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
    },
    {
      id: 'pro_003',
      name: 'Neha Kapoor',
      experience: 5,
      expertise: ['Facial', 'Skin Care'],
      imageUrl:
        'https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9',
    },
  ],
};



