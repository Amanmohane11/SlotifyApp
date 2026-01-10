import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Service = {
  id: string;
  name: string;
  duration: number; // in minutes
  price: number;
};

interface PriceOverviewCardProps {
  services: Service[];
}

const PriceOverviewCard: React.FC<PriceOverviewCardProps> = ({ services }) => {
  const totalDuration = services.reduce(
    (sum, service) => sum + service.duration,
    0,
  );

  const totalPrice = services.reduce((sum, service) => sum + service.price, 0);

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={[styles.row, styles.headerRow]}>
        <Text style={[styles.cell, styles.headerText]}>Service</Text>
        <Text style={[styles.cell, styles.headerText, styles.center]}>
          Duration
        </Text>
        <Text style={[styles.cell, styles.headerText, styles.right]}>
          Price
        </Text>
      </View>

      {/* Services */}
      {services.map(service => (
        <View key={service.id} style={styles.row}>
          <Text style={styles.cell}>{service.name}</Text>
          <Text style={[styles.cell, styles.center]}>
            {service.duration} min
          </Text>
          <Text style={[styles.cell, styles.right]}>₹{service.price}</Text>
        </View>
      ))}

      {/* Divider */}
      <View style={styles.divider} />

      {/* Total */}
      <View style={styles.row}>
        <Text style={[styles.cell, styles.totalText]}>Total</Text>
        <Text style={[styles.cell, styles.center, styles.totalText]}>
          {totalDuration} min
        </Text>
        <Text style={[styles.cell, styles.right, styles.totalPrice]}>
          ₹{totalPrice}
        </Text>
      </View>
    </View>
  );
};

export default PriceOverviewCard;
