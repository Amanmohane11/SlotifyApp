import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Home flow screens
import HomeScreen from '../screens/home/Homes/HomeScreen';
import SalonDetailScreen from '../screens/home/SalonDetail/SalonDetailScreen';
import ReviewScreen from '../screens/home/review&Confirm/ReviewScreen';

// Theme
import { colors } from '../theme/colors';
import ServiceScreen from '../screens/home/Services/ServiceScreen';
import ProfessionalDetailScreen from '../screens/home/profDetail/ProfDetailScreen';
import SlotSelectionScreen from '../screens/home/Slot/SlotSelectScreen';
import NotificationsScreen from '../screens/notifications/NotificationScreen';
import ChooseBookingTypeScreen from '../screens/bookingType/Type/BookType';
import GroupDetailsScreen from '../screens/bookingType/group/AddGroup';
import SalonListScreen from '../screens/saloonList/SaloonListScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="SalonList" component={SalonListScreen} />

      <Stack.Screen name="SalonDetail" component={SalonDetailScreen} />

      <Stack.Screen name="Service" component={ServiceScreen} />

      <Stack.Screen
        name="ProfessionalDetail"
        component={ProfessionalDetailScreen}
      />

      <Stack.Screen
        name="ChooseBookingType"
        component={ChooseBookingTypeScreen}
      />

      <Stack.Screen name="GroupDetail" component={GroupDetailsScreen} />

      <Stack.Screen name="SelectSlot" component={SlotSelectionScreen} />

      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
