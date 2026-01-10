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
  const isLoggedIn = false; // user logged in?
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


// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { View, Text } from 'react-native';

// const Stack = createNativeStackNavigator();

// const TestScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Navigation OK ✅</Text>
//   </View>
// );

// const RootNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Test" component={TestScreen} />
//     </Stack.Navigator>
//   );
// };

// export default RootNavigator;
