import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import BookingSummaryCard from '../../../components/cards/reviewCard/Review&Conf';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import styles from './styles';

import type { RootState } from '../../../app/store';

const ReviewConfirmScreen = () => {
  const {
    selectedServices,
    professionalId,
    dateId,
    slot,
  } = useSelector((state: RootState) => state.booking);

  const { salon, professionals, availableDates } = useSelector(
    (state: RootState) => state.saloonDetail
  );

  const professional = professionals.find(p => p.id === professionalId);
  const date = availableDates.find(d => d.id === dateId);

  if (!salon || !professional || !slot || !date) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Incomplete booking</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Review & Confirm</Text>

      {/* Professional Card */}
      <View style={styles.card}>
        {professional.imageUrl && (
          <Image
            source={{ uri: professional.imageUrl }}
            style={styles.avatar}
          />
        )}

        <View style={styles.cardInfo}>
          <Text style={styles.profName}>{professional.name}</Text>

          <Text style={styles.subText}>
            {selectedServices.map(s => s.name).join(', ')}
          </Text>

          <Text style={styles.slotTime}>
            {slot.start} – {slot.end} • {date.label}
          </Text>
        </View>
      </View>

      {/* Summary */}
      <BookingSummaryCard
        services={selectedServices}
        professionalName={professional.name}
        slotTime={`${slot.start} – ${slot.end} • ${date.label}`}
        taxPercent={10}
        discount={0}
        cancellationPolicy="Cancellation within 24 hours may incur a fee."
      />

      <PrimaryButton
        title="Confirm & Pay"
        onPress={() => {
          // dispatch(createAppointment())
        }}
        style={{ marginTop: 24 }}
      />
    </ScrollView>
  );
};

export default ReviewConfirmScreen;
