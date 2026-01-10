import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { colors } from '../../theme/colors';

interface MenuItemProps {
  icon: string;
  title: string;
  screen?: string; // legacy: direct screen name
  route?: string; // tab or parent route to navigate to
  nested?: string; // nested screen name when navigating to a route
  onPress?: () => void; // 👈 optional custom handler
  danger?: boolean;
}

export const MenuItem = ({
  icon,
  title,
  screen,
  route,
  nested,
  onPress,
  danger,
}: MenuItemProps) => {
  const navigation = useNavigation<any>();
  


  const handlePress = () => {
    // Case 1: custom handler exists
    if (onPress) {
      onPress();
      return;
    }

    // Case 2: explicit route (tab/parent) navigation with optional nested screen
    if (route) {
      // try parent (tab navigator) first, then fallback
      const parentNav = navigation.getParent?.();
      if (parentNav && parentNav.navigate) {
        parentNav.navigate(route, nested ? { screen: nested } : undefined);
        return;
      }

      navigation.navigate(route, nested ? { screen: nested } : undefined);
      return;
    }

    // Case 3: legacy/direct screen name (assumed to be in current stack)
    if (screen) {
      navigation.navigate(screen);
      return;
    }

    // Nothing to do — warn developer
    console.warn(`[MenuItem] No action defined for "${title}".`);
  };

  return (
    <TouchableOpacity style={styles.menuItem} onPress={handlePress}>
      <Ionicons
        name={icon}
        size={22}
        color={danger ? colors.error : colors.primary}
      />

      <Text style={[styles.menuText, danger && { color: colors.error }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
