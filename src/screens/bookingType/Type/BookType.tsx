import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { colors } from '../../../theme/colors';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

type BookingType = 'individual' | 'group';

const ChooseBookingTypeScreen = () => {
  const navigation = useNavigation<any>();

  const [selectedType, setSelectedType] = useState<BookingType>('individual');

  const handleContinue = () => {
    if (selectedType === 'individual') {
      navigation.navigate('SelectSlot', {
        bookingType: 'individual',
      });
    } else {
      navigation.navigate('GroupDetail', {
        bookingType: 'group',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Booking Type</Text>

      {/* Individual Booking */}
      <TouchableOpacity
        style={[
          styles.card,
          selectedType === 'individual' && styles.activeCard,
        ]}
        onPress={() => setSelectedType('individual')}
      >
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Individual Booking</Text>
          <Text style={styles.cardSubtitle}>Book a service just for you.</Text>
        </View>

        <Ionicons name="person-outline" size={36} color={colors.primary} />
      </TouchableOpacity>

      {/* Group Booking */}
      <TouchableOpacity
        style={[styles.card, selectedType === 'group' && styles.activeCard]}
        onPress={() => setSelectedType('group')}
      >
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Group Booking</Text>
          <Text style={styles.cardSubtitle}>Book for multiple people.</Text>
        </View>

        <Ionicons name="people-outline" size={36} color={colors.primary} />
      </TouchableOpacity>

      {/* Continue */}
      <PrimaryButton
        title="Continue"
        onPress={handleContinue}
        disabled={!selectedType}
        style={styles.continueButton}
      />
    </View>
  );
};

export default ChooseBookingTypeScreen;
