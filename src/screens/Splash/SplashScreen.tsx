import React, { useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Safely pick a registered route to replace to.
      const available = navigation.getState && navigation.getState().routeNames;
      const preferred = ['Main', 'Auth', 'UserDetails', 'Login'];
      const next = Array.isArray(available)
        ? preferred.find(n => available.includes(n))
        : undefined;

      if (next) {
        navigation.replace(next);
      }
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return <View style={styles.container} />;
};

export default SplashScreen;
