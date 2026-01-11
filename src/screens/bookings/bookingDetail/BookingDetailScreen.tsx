import React, { useMemo } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import PrimaryButton from '../../../components/buttons/PrimaryButton';
import PriceOverviewCard from '../../../components/cards/priceOverview/PriceOverview';
import { styles } from './styles';

import type { AppDispatch, RootState } from '../../../app/store';
import { startReschedule } from '../../../app/slices/bookingSlice';

const AppointmentDetailsScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  
  const { appointmentId } = route.params ?? {};

  const { upcoming, past } = useSelector(
    (state: RootState) => state.appointment
  );

  const appointment = useMemo(() => {
    return (
      upcoming.find(a => a.id === appointmentId) ||
      past.find(a => a.id === appointmentId) ||
      null
    );
  }, [appointmentId, upcoming, past]);
  

  if (!appointment) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Appointment Found</Text>
      </View>
    );
  }
       const normalizedStatus = appointment.status.toLowerCase(); 

  const handleReschedule = () => {
    dispatch(startReschedule({ appointmentId: appointment.id }));
    navigation.navigate('SelectSlot');
  };

  const handleCancel = () => {
    navigation.navigate('CancelBooking', {
      appointmentId: appointment.id,
    });
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Salon Image (badge REMOVED as requested) */}
      <View style={styles.imageWrapper}>
        <Image
          source={
            typeof appointment.image === 'string'
              ? { uri: appointment.image }
              : appointment.image
          }
          style={styles.image}
        />
      </View>

      {/* Details Section */}
      <View style={styles.card}>
        <Text style={styles.title}>Appointment Details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Professional</Text>
          <Text style={styles.value}>
            {appointment.professionalName ?? '—'}
          </Text>
        </View>


   
        {/* STATUS — added before Date */}
          <View style={styles.row}>
  <Text style={styles.label}>Status</Text>
  <Text style={styles.value}>
    {normalizedStatus === 'upcoming'
      ? 'Confirmed'
      : normalizedStatus === 'cancelled'
      ? 'Cancelled'
      : normalizedStatus === 'resheduled'
      ? 'Rescheduled'
      : 'Completed'}
  </Text>
</View>


        <View style={styles.row}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{appointment.date}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>
            {appointment.startTime} – {appointment.endTime}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Venue</Text>
          <Text style={styles.value}>{appointment.salonName}</Text>
        </View>

        {/* Directions */}
        <PrimaryButton
          title="Get Directions"
          onPress={() => {
            // TODO: open maps
          }}
          style={styles.actionButton}
        />

        {/* Actions (still shown; backend should validate rules) */}
        <PrimaryButton
          title="Reschedule"
          variant="outline"
          onPress={handleReschedule}
          style={styles.actionButton}
        />

        <PrimaryButton
          title="Cancel Appointment"
          variant="outline"
          onPress={handleCancel}
          style={styles.actionButton}
        />

        {/* Price Overview */}
        <Text style={styles.sectionTitle}>Price Overview</Text>
        <PriceOverviewCard
          services={appointment.serviceNames.map((name, index) => ({
            id: `${appointment.id}_${index}`,
            name,
            duration: 0,
            price: 0,
          }))}
        />

        {/* Cancellation Policy */}
        <Text style={styles.sectionTitle}>Cancellation Policy</Text>
        <Text style={styles.policyText}>
          You may cancel or reschedule your appointment up to 24 hours
          before the scheduled time. Late cancellations may incur a fee.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AppointmentDetailsScreen;
