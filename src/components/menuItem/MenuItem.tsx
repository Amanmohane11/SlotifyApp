import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { colors } from '../../theme/colors';

interface MenuItemProps {
  icon: string;
  title: string;
  screen?: string; // 👈 navigation target
  onPress?: () => void; // 👈 optional custom handler
  danger?: boolean;
}

export const MenuItem = ({
  icon,
  title,
  screen,
  onPress,
  danger,
}: MenuItemProps) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    if (onPress) {
      onPress(); // custom logic (logout, share, etc.)
      return;
    }

    if (screen) {
      navigation.navigate(screen);
    }
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
