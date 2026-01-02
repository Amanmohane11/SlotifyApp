import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export interface ServiceItem {
  name: string;
  time: string;
  price: string;
}

interface Props {
  services: ServiceItem[];
  onAddPress?: (service: ServiceItem) => void;
  onSeeAllPress?: () => void;
  showSeeAll?: boolean; // 👈 NEW
}

const ServiceSection: React.FC<Props> = ({
  services,
  onAddPress,
  onSeeAllPress,
  showSeeAll = false, // 👈 default false
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Services</Text>

      {services.map((service, index) => (
        <View key={index} style={styles.serviceRow}>
          <View>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.serviceTime}>{service.time}</Text>
          </View>

          <View style={styles.serviceRight}>
            <Text style={styles.price}>{service.price}</Text>

            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => onAddPress?.(service)}
            >
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* SEE ALL SERVICES → ONLY WHEN ENABLED */}
      {showSeeAll && onSeeAllPress && (
        <TouchableOpacity
          style={styles.seeMoreContainer}
          onPress={onSeeAllPress}
        >
          <Text style={styles.seeMoreText}>See all services</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ServiceSection;
