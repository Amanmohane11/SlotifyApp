import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens

import LoginScreen from '../screens/loginPage/Login';
import BottomTabNavigator from './BottomTabNavigator';
import SplashScreen from '../screens/Splash/SplashScreen';
import UserDetailScreen from '../screens/userDetail/UserDetail';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  // 🔐 Replace these with Redux / AsyncStorage later
  const isLoggedIn = true; // user logged in?
  const isProfileComplete = false; // user filled details?

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Splash always first */}
      <Stack.Screen name="Splash" component={SplashScreen} />

      {/* Auth flow */}
      {!isLoggedIn && <Stack.Screen name="Auth" component={LoginScreen} />}

      {/* Profile completion */}
      {isLoggedIn && !isProfileComplete && (
        <Stack.Screen name="UserDetails" component={UserDetailScreen} />
      )}

      {/* Main App */}
      {isLoggedIn && isProfileComplete && (
        <Stack.Screen name="Main" component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
