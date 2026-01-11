import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from '../../app/store';
import { cancelAppointment } from '../../app/slices/bookingSlice';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import styles from './styles';

const REASONS = [
  'Changed my mind',
  'Found another salon/professional',
  'Scheduling conflict',
  'Other',
];

const CancelBookingScreen = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const { appointmentId, cancellingAppointment } = useSelector(
    (state: RootState) => state.booking
  );

  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [otherReason, setOtherReason] = useState('');

  const handleConfirm = () => {
    if (!appointmentId || !selectedReason) return;

    dispatch(
      cancelAppointment({
        appointmentId,
        reason:
          selectedReason === 'Other'
            ? otherReason.trim()
            : selectedReason,
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Heading */}
      <Text style={styles.title}>Cancel Booking</Text>

      {/* Subheading */}
      <Text style={styles.subtitle}>Reason for Cancellation</Text>

      {/* Reason Options */}
      {REASONS.map(reason => (
        <View
          key={reason}
          style={styles.optionRow}
          onTouchEnd={() => setSelectedReason(reason)}
        >
          <View
            style={[
              styles.radio,
              selectedReason === reason && styles.radioSelected,
            ]}
          />
          <Text
            style={styles.optionText}
            onPress={() => setSelectedReason(reason)}
          >
            {reason}
          </Text>
        </View>
      ))}

      {/* Other Reason Input */}
      {selectedReason === 'Other' && (
        <TextInput
          style={styles.input}
          placeholder="Please specify"
          placeholderTextColor="#999"
          value={otherReason}
          onChangeText={setOtherReason}
          multiline
        />
      )}

      {/* Confirm Cancellation */}
      <PrimaryButton
        title="Confirm Cancellation"
        onPress={handleConfirm}
        loading={cancellingAppointment}
        disabled={
          !selectedReason ||
          (selectedReason === 'Other' && !otherReason.trim())
        }
        style={{ marginTop: 24 }}
      />

      {/* Go Back */}
      <PrimaryButton
        title="Go Back to Booking"
        onPress={() => navigation.goBack()}
        variant="outline"
        style={{ marginTop: 16 }}
      />
    </ScrollView>
  );
};

export default CancelBookingScreen;
