import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { bookingSummaryData } from '../../../assets/data/salonDetail';
import BookingSummaryCard from '../../../components/cards/reviewCard/Review&Conf';
import { selectedServices } from '../../../assets/data/saloonData';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import styles from './styles';

const ReviewConfirmScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Review & Confirm</Text>

      {/* Salon / Professional Card */}
      {/* Salon / Professional Card */}
      <View style={styles.card}>
        <Image
          source={{ uri: bookingSummaryData.professional.image }}
          style={styles.avatar}
        />

        <View style={styles.cardInfo}>
          <Text style={styles.profName}>
            {bookingSummaryData.professional.name}
          </Text>

          <Text style={styles.subText}>{bookingSummaryData.service.name}</Text>

          <Text style={styles.slotTime}>
            {bookingSummaryData.slot.time} • {bookingSummaryData.slot.dateLabel}
          </Text>
        </View>
      </View>

      {/* Booking summary detail */}
      <BookingSummaryCard
        services={selectedServices}
        professionalName="John Doe"
        slotTime="12:00 PM • 13 Tue"
        taxPercent={10}
        discount={80}
        cancellationPolicy="Cancellation within 24 hours may incur a fee."
      />

      {/* Confirm Button */}
      <PrimaryButton
        title="Confirm & Pay"
        onPress={() => {
          console.log('Proceed to payment');
        }}
        style={{ marginTop: 24 }}
      />
    </ScrollView>
  );
};

export default ReviewConfirmScreen;
