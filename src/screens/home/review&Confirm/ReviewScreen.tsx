import React, { useMemo } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import BookingSummaryCard from '../../../components/cards/reviewCard/Review&Conf';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import styles from './styles';

import type { AppDispatch, RootState } from '../../../app/store';
import { submitAppointment } from '../../../app/slices/bookingSlice';

const ReviewConfirmScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    selectedServices,
    professionalId,
    dateId,
    slot,
    creatingAppointment,
    appointmentError,
    appointmentId,
    isRescheduleFlow,
  } = useSelector((state: RootState) => state.booking);

  const { salon, professionals, availableDates } = useSelector(
    (state: RootState) => state.saloonDetail,
  );

  const professional = useMemo(
    () => professionals.find(p => p.id === professionalId),
    [professionals, professionalId],
  );

  const date = useMemo(
    () => availableDates.find(d => d.id === dateId),
    [availableDates, dateId],
  );

  const isValidBooking =
    salon &&
    professional &&
    date &&
    slot &&
    selectedServices.length > 0;

  /* ---------------- HANDLER ---------------- */

  const handleConfirm = () => {
    if (!isValidBooking) return;

    dispatch(
      submitAppointment({
        salonId: salon!.id,
        professionalId: professional!.id,
        dateId: date!.id,
        slot: slot!,
        services: selectedServices,
        appointmentId: isRescheduleFlow ? appointmentId ?? undefined : undefined,
      }),
    );
  };

  /* ---------------- GUARD ---------------- */

  if (!isValidBooking) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Incomplete booking</Text>
        <Text style={styles.subText}>
          Please select services, professional, date, and time slot.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {isRescheduleFlow ? 'Review & Reschedule' : 'Review & Confirm'}
      </Text>

      {/* Professional Card */}
      <View style={styles.card}>
        {professional?.imageUrl && (
          <Image
            source={{ uri: professional.imageUrl }}
            style={styles.avatar}
          />
        )}

        <View style={styles.cardInfo}>
          <Text style={styles.profName}>{professional!.name}</Text>

          <Text style={styles.subText}>
            {selectedServices.map(s => s.name).join(', ')}
          </Text>

          <Text style={styles.slotTime}>
            {slot!.start} – {slot!.end} • {date!.label}
          </Text>
        </View>
      </View>

      {/* Summary */}
      <BookingSummaryCard
        services={selectedServices}
        professionalName={professional!.name}
        slotTime={`${slot!.start} – ${slot!.end} • ${date!.label}`}
        taxPercent={10}
        discount={0}
        cancellationPolicy="Cancellation within 24 hours may incur a fee."
      />

      {/* Error */}
      {appointmentError && (
        <Text style={styles.errorText}>{appointmentError}</Text>
      )}

      {/* CTA */}
      <PrimaryButton
        title={
          creatingAppointment
            ? 'Processing...'
            : isRescheduleFlow
            ? 'Confirm Reschedule'
            : 'Confirm & Pay'
        }
        onPress={handleConfirm}
        disabled={creatingAppointment}
        style={{ marginTop: 24 }}
      />
    </ScrollView>
  );
};

export default ReviewConfirmScreen;
