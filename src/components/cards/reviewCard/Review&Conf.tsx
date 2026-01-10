import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface SelectedService {
  id: string;
  name: string;
  time: number;
  price: number;
}

interface Props {
  services: SelectedService[];
  professionalName: string;
  slotTime: string;
  taxPercent?: number;
  discount?: number;
  cancellationPolicy: string;
}

const BookingSummaryCard: React.FC<Props> = ({
  services,
  professionalName,
  slotTime,
  taxPercent = 10,
  discount = 0,
  cancellationPolicy,
}) => {
  const subtotal = useMemo(
    () => services.reduce((sum, s) => sum + s.price, 0),
    [services],
  );

  const tax = useMemo(
    () => Math.round((subtotal * taxPercent) / 100),
    [subtotal, taxPercent],
  );

  const total = subtotal + tax - discount;

  return (
    <View style={styles.card}>
      {/* Booking Details */}
      <Text style={styles.sectionTitle}>Your Booking Details</Text>

      {/* Services List */}
      {services.map(service => (
        <View key={service.id} style={styles.serviceRow}>
          <View>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.serviceTime}>{service.time} min</Text>
          </View>

          <Text style={styles.servicePrice}>${service.price}</Text>
        </View>
      ))}

      <View style={styles.row}>
        <Text style={styles.label}>Professional</Text>
        <Text style={styles.value}>{professionalName}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Time</Text>
        <Text style={styles.value}>{slotTime}</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Price Summary */}
      <Text style={styles.sectionTitle}>Price Summary</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>${subtotal}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Tax ({taxPercent}%)</Text>
        <Text style={styles.value}>${tax}</Text>
      </View>

      {discount > 0 && (
        <View style={styles.row}>
          <Text style={styles.label}>Discount</Text>
          <Text style={styles.discountValue}>-${discount}</Text>
        </View>
      )}

      <View style={[styles.row, styles.totalRow]}>
        <Text style={styles.totalLabel}>Total Price</Text>
        <Text style={styles.totalValue}>${total}</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Cancellation Policy */}
      <Text style={styles.sectionTitle}>Cancellation Policy</Text>
      <Text style={styles.policyText}>{cancellationPolicy}</Text>
    </View>
  );
};

export default BookingSummaryCard;
