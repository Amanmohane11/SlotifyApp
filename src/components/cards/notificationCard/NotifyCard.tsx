import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { colors } from '../../../theme/colors';

type Props = {
  icon: string;
  title: string;
  description: string;
  time: string;
  actionText?: string;
  onPress?: () => void;
};

const NotificationCard = ({
  icon,
  title,
  description,
  time,
  actionText,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={22} color={colors.primary} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>

          {actionText && <Text style={styles.action}>{actionText}</Text>}

          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
