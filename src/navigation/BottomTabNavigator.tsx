import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens (simple ones only)

// Theme
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import HomeStackNavigator from './HomeStack';
import BookingStackNavigator from './BookingStack';
import FavoritesScreen from '../screens/favorites/FavoriteScreen';
import ProfileStack from './ProfileStack';
import SearchScreen from '../screens/search/SearchScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  // debug logs removed

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: 64,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: {
          fontSize: typography.fontSize.xs,
          fontWeight: typography.fontWeight.medium,
        },
      }}
    >
      {/* Home booking flow */}
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{ title: 'Home' }}
      />

      {/* Search */}
      <Tab.Screen
        name="SearchTab"
        component={SearchScreen}
        options={{ title: 'Search' }}
      />

      {/* Booking history */}
      <Tab.Screen
        name="BookingsTab"
        component={BookingStackNavigator}
        options={{ title: 'Bookings' }}
      />

      <Tab.Screen name="Favorites" component={FavoritesScreen} />

      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
