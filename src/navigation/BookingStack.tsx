import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { colors } from '../theme/colors';
import AppointmentDetailsScreen from '../screens/bookings/bookingDetail/BookingDetailScreen';
// import MyAppointmentsScreen from '../screens/bookings/BookingList/BookingListScreen';
import MyAppointmentsScreen from '../screens/bookings/bookingList/BookingList';

const Stack = createNativeStackNavigator();

const BookingStackNavigator = () => {
  // debug log removed

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
      <Stack.Screen name="BookingList" component={MyAppointmentsScreen} />

      {/* Optional detail page */}
      <Stack.Screen name="BookingDetail" component={AppointmentDetailsScreen} />
    </Stack.Navigator>
  );
};

export default BookingStackNavigator;
