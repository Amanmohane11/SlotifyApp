import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookingListScreen from '../screens/bookings/BookingList/BookingListScreen';

import { colors } from '../theme/colors';
import AppointmentDetailsScreen from '../screens/bookings/bookingDetail/BookingDetailScre';

const Stack = createNativeStackNavigator();

const BookingStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      {/* Single bookings page */}
      <Stack.Screen name="BookingList" component={BookingListScreen} />

      {/* Optional detail page */}
      <Stack.Screen name="BookingDetail" component={AppointmentDetailsScreen} />
    </Stack.Navigator>
  );
};

export default BookingStackNavigator;
