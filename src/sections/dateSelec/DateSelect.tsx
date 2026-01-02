import React from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

export interface AvailableDate {
  id: string;
  label: string; // "12 Mon"
}

interface Props {
  dates: AvailableDate[];
  selectedDateId: string;
  onSelectDate: (dateId: string) => void;
}

const DateSelectSection: React.FC<Props> = ({
  dates,
  selectedDateId,
  onSelectDate,
}) => {
  return (
    <FlatList
      data={dates}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelectDate(item.id)}
          style={[
            styles.dateBtn,
            selectedDateId === item.id && styles.dateSelected,
          ]}
        >
          <Text
            style={[
              styles.dateText,
              selectedDateId === item.id && styles.dateTextSelected,
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default DateSelectSection;
