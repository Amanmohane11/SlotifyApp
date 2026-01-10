import { Banner } from "../../app/types/banner";

export const profileData = {
  name: 'User Name',
  phone: '8767617675',
};

export const profileMenuItems = [
  {
    id: '1',
    title: 'My Bookings',
    icon: 'calendar-outline',
    route: 'BookingsTab',
    nested: 'BookingList',
  },
  {
    id: '2',
    title: 'Support & FAQ',
    icon: 'help-circle-outline',
    // screen: 'Support',
  },
  {
    id: '3',
    title: 'Share App',
    icon: 'share-social-outline',
    // action: 'share',
  },
  {
    id: '4',
    title: 'Privacy Policy',
    icon: 'shield-checkmark-outline',
    // screen: 'PrivacyPolicy',
  },
  {
    id: '5',
    title: 'Logout',
    icon: 'log-out-outline',
    danger: true,
    // action: 'logout',
  },
];

 export const dummyBanners: Banner[] =[
  {
    id: '1',
    imageUrl: require('../assets/images/saloonImage.jpg'),
    title: 'Spring Sale – Flat 50% Off',
    redirectType: 'offer',
    redirectId: 'spring-sale',
  },
  {
    id: '2',
    imageUrl: require('../assets/images/saloonImage.jpg'),
    title: 'Premium Salons Near You',
    redirectType: 'salon',
    redirectId: 'premium',
  },
  {
    id: '3',
    imageUrl: require('../assets/images/saloonImage.jpg'),
    title: 'Visit Our Website',
    redirectType: 'external',
    redirectId: 'https://slotify.app',
  },
  {
    id: '4',
    imageUrl: require('../assets/images/saloonImage.jpg'),
    title: 'Welcome to Slotify 🎉',
    // no redirect → static banner
  },
];
