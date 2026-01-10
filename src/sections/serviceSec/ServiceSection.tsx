import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { styles } from './styles';

/* =======================
   TYPES
======================= */

export interface ServiceItem {
  id: string;
  name: string;
  time: number;      // minutes
  price: number;     // currency number
  category: string;
}

interface Props {
  services: ServiceItem[];

  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;

  selectedServices: ServiceItem[];
  onServiceToggle: (service: ServiceItem) => void;

  onSeeAllPress?: () => void;
  showSeeAll?: boolean;
}

/* =======================
   COMPONENT
======================= */

const ServiceSection: React.FC<Props> = ({
  services,
  categories,
  selectedCategory,
  onCategorySelect,
  selectedServices,
  onServiceToggle,
  onSeeAllPress,
  showSeeAll = false,
}) => {
  const isSelected = (id: string) =>
    selectedServices.some(s => s.id === id);

  return (
    <View style={styles.section}>
      {/* Heading */}
      <Text style={styles.sectionTitle}>Services</Text>

      {/* CATEGORY CAPSULES */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.capsuleContainer}
      >

        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.capsule,
              selectedCategory === category && styles.capsuleActive,
            ]}
            onPress={() => onCategorySelect(category)}
          >
            <Text style={styles.capsuleText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* SERVICE LIST */}
      {services.map(service => {
        const selected = isSelected(service.id);

        return (
          <View key={service.id} style={styles.serviceRow}>
            <View>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceTime}>{service.time} min</Text>
            </View>

            <View style={styles.serviceRight}>
            <Text style={styles.price}>₹{service.price}</Text>

              <TouchableOpacity
                style={[
                  styles.addBtn,
                  selected && styles.addBtnSelected,
                ]}
                onPress={() => onServiceToggle(service)}
              >
                <Text
                  style={[
                    styles.addText,
                    selected && styles.addTextSelected,
                  ]}
                >
                  {selected ? '✓' : '+'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}

      {/* SEE ALL */}
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
