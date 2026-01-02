//  import prof from '../images/prof1.jpg'

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
    imageUrl: '../images/prof1.jpg',
  },
  {
    id: '2',
    name: 'Mark',
    experience: 8,
    expertise: 'Color Expert',
    imageUrl: '../images/prof2.jpg',
  },
  {
    id: '3',
    name: 'Sofia',
    experience: 5,
    expertise: 'Facial & Spa',
    imageUrl: '../images/prof3.jpg',
  },
];

export const pastBookingsData = [
  {
    id: '1',
    name: 'Chic Cuts',
    service: 'Nail Art Studio',
    image: 'https://via.placeholder.com/100x100',
    type: 'Unisex',
  },
  {
    id: '2',
    name: 'The Golden Comb',
    service: 'Haircut & Styling',
    image: 'https://via.placeholder.com/100x100',
    type: 'Unisex',
  },
];

export const servicesData = [
  { name: 'Women Cut', time: '60 min', price: '$75' },
  { name: 'Full Color', time: '120 min', price: '$150' },
  { name: 'Deep Conditioning', time: '30 min', price: '$45' },
  { name: 'Hair Spa', time: '45 min', price: '$60' },
  { name: 'Blow Dry', time: '30 min', price: '$40' },
];

export const professionalSelectData = [
  { id: 'random', isRandom: true, name: 'Any Pro' },
  {
    id: '1',
    name: 'Sophia',
    image: '../images/prof1.jpg',
  },
  {
    id: '2',
    name: 'Daniel',
    image: '../images/prof2.jpg',
  },
  {
    id: '3',
    name: 'Emma',
    image: '../images/prof3.jpg',
  },
];

export const slots = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '01:30 PM',
  '03:30 PM',
  '04:45 PM',
];

export const availableDates = [
  { id: '2025-01-12', label: '12 Mon' },
  { id: '2025-01-13', label: '13 Tue' },
  { id: '2025-01-14', label: '14 Wed' },
];

export const CATEGORIES = ['Hair', 'Nails', 'Massage', 'Facial', 'Barber'];

export const SERVICES = [
  {
    title: 'Hair',
    data: [
      { name: 'Hair Services & Styling', time: '60 min', price: '$60' },
      { name: 'Haircut & Styling', time: '60 min', price: '$150' },
      { name: 'Color & Highlights', time: '120 min', price: '$150' },
      { name: 'Deep Conditioning', time: '30 min', price: '$40' },
    ],
  },
  {
    title: 'Massage',
    data: [
      { name: 'Swedish Massage', time: '90 min', price: '$400' },
      { name: 'Hot Stone Massage', time: '95 min', price: '$100' },
      { name: 'Relax Therapy', time: '75 min', price: 'Add' },
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
