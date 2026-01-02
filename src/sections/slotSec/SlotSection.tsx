import React from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

interface Props {
  slots: string[];
  selectedSlot: string;
  onSelectSlot: (slot: string) => void;
}

const SlotSection: React.FC<Props> = ({
  slots,
  selectedSlot,
  onSelectSlot,
}) => {
  return (
    <FlatList
      data={slots}
      numColumns={2}
      keyExtractor={item => item}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelectSlot(item)}
          style={[styles.slotBtn, selectedSlot === item && styles.slotSelected]}
        >
          <Text
            style={[
              styles.slotText,
              selectedSlot === item && styles.slotTextSelected,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default SlotSection;
