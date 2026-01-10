import { FavoriteSalon } from "../../app/types/salon";

// Selected services (user cart)
export const selectedServices = [
  {
    id: '1',
    name: 'Haircut & Styling',
    duration: '60 min',
    price: 90,
  },
  {
    id: '2',
    name: 'Deep Conditioning',
    duration: '30 min',
    price: 40,
  },
];

// Booking meta
export const bookingMeta = {
  professionalName: 'John Doe',
  slotTime: '12:00 PM • 13 Tue',
};

// Pricing config
export const pricingConfig = {
  taxPercent: 10,
  discount: 80,
};

// Cancellation policy
export const cancellationPolicyText =
  'Cancellation within 24 hours may incur a fee.';

export const favoriteSalons: FavoriteSalon[] = [
  {
    id: '1',
    name: 'Lavish Locks',
    category: 'Hair, Nails, Spa',
    rating: 4.5,
      reviewCount: 1264,
    imageUrl: require('../images/saloonImage.jpg'),
    type: 'Unisex',
    isFavorite: true,
  },
  {
    id: '2',
    name: 'The Golden Comb',
    category: 'Hair Styling, Grooming',
    rating: 4.6,
      reviewCount: 1264,
    imageUrl: require('../images/saloonImage.jpg'),
    type: 'Men',
    isFavorite: true,
  },
  {
    id: '3',
    name: 'Velvet & Stone',
    category: 'Luxury Spaja & Wellness',
    rating: 4.7,
      reviewCount: 1264,
    imageUrl: require('../images/saloonImage.jpg'),
    type: 'Women',
    isFavorite: true,
  },
];

// src/assets/data/notifications.ts

export const notificationsData = [
  {
    id: '1',
    icon: 'checkmark-circle-outline',
    title: 'Booking Confirmed',
    description:
      'Your appointment with The Golden Comb on 12 Oct at 10:00 AM is confirmed.',
    time: '5 mins ago',
  },
  {
    id: '2',
    icon: 'gift-outline',
    title: 'Special Offer',
    description: 'Get 20% off your next haircut with code GOLD20.',
    actionText: 'View Details',
    time: '5 hours ago',
  },
  {
    id: '3',
    icon: 'time-outline',
    title: 'Reminder: Upcoming Appointment',
    description: "Don't forget your appointment with Sofia at 10:00 AM.",
    time: 'Yesterday',
  },
  {
    id: '4',
    icon: 'time-outline',
    title: 'Reminder: Upcoming',
    description: "Don't forget your appointment tomorrow at 10:00 AM.",
    time: 'Yesterday',
  },
];

export const services = [
  {
    id: '1',
    name: 'Haircut',
    duration: 30, // minutes
    price: 300,
  },
  {
    id: '2',
    name: 'Beard Trim',
    duration: 15,
    price: 150,
  },
  {
    id: '3',
    name: 'Hair Wash',
    duration: 10,
    price: 100,
  },
];

// assets/data/upcomingAppointments.ts

export const upcomingAppointments = [
  {
    id: 'up_001',
    salonId: 'salon_001',
    salonName: 'Luxe Cut & Shave',
    serviceNames: ['Haircut', 'Beard Trim'],
    date: '2025-10-24',
    time: '2:30 PM',
    professionalName: 'Amit Sharma',
    status: 'upcoming',
    image: require('../images/saloonImage.jpg'),
  },
  {
    id: 'up_002',
    salonId: 'salon_001',
    salonName: 'Luxe Cut & Shave',
    serviceNames: ['Hair Spa'],
    date: '2025-10-24',
    time: '6:00 PM',
    professionalName: 'Rohit Verma',
    status: 'upcoming',
    image: require('../images/salonImage2.jpg'),
  },
];



