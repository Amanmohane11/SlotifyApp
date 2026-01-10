import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ServiceItem } from '../../app/types/salon';

interface Props {
  service: ServiceItem;
  onAddPress?: (service: ServiceItem) => void;
}

const AllServicesSection: React.FC<Props> = ({
  service,
  onAddPress,
}) => {
  return (
    <View style={styles.serviceRow}>
      {/* LEFT */}
      <View style={styles.serviceLeft}>
        <Text style={styles.serviceName}>
          {service.name}
        </Text>
        <Text style={styles.serviceTime}>
          {service.time} min
        </Text>
      </View>

      {/* RIGHT */}
      <View style={styles.serviceRight}>
        <Text style={styles.price}>
          ₹{service.price}
        </Text>

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => onAddPress?.(service)}
        >
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllServicesSection;
