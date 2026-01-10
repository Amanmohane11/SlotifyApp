import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PrimaryButton from '../../../components/buttons/PrimaryButton';
import PriceOverviewCard from '../../../components/cards/priceOverview/PriceOverview';
import { services } from '../../../assets/data/saloonData';
import { styles } from './styles';
import { colors } from '../../../theme/colors';

const handleReschedule = () => {
  console.log('reschedule');
};
const handleCancel = () => {
  console.log('reschedule');
};

const AppointmentDetailsScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Salon Image */}
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../../assets/images/saloonImage.jpg')}
          style={styles.image}
        />

        <View style={styles.statusBadge}>
          <Ionicons name="checkmark" size={14} color={colors.textInverse} />
          <Text style={styles.statusText}>Appointment Confirmed</Text>
        </View>
      </View>

      {/* Details Section */}
      <View style={styles.card}>
        <Text style={styles.title}>Appointment Details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Professional</Text>
          <Text style={styles.value}>Sofia Johnson</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>12 October 2025</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>10:00 AM</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Venue</Text>
          <Text style={styles.value}>The Golden Comb, 123 Gold Street</Text>
        </View>

        {/* Directions Button */}
        <PrimaryButton
          title="Get Directions"
          onPress={() => {
            // TODO: Open Google Maps
          }}
        
        />

        {/* Action Buttons */}
        <PrimaryButton
          title="Reschedule"
          variant="outline"
          onPress={handleReschedule}
        />

        <PrimaryButton
          title="Cancel Appointment"
          variant="outline"
          onPress={handleCancel}
        />

        {/* Price Overview */}
        <Text style={styles.sectionTitle}>Price Overview</Text>

        <PriceOverviewCard services={services} />

        {/* Cancellation Policy */}
        <Text style={styles.sectionTitle}>Cancellation Policy</Text>
        <Text style={styles.policyText}>
          You may cancel or reschedule your appointment up to 24 hours before
          the scheduled time. Late cancellations may incur a fee.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AppointmentDetailsScreen;
