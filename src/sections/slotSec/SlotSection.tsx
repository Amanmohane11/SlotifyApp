import React from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import type { Slot } from '../../app/types/salon';

interface Props {
  slots: Slot[];
  selectedSlot: Slot | undefined;
  onSelectSlot: (slot: Slot) => void;
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
      keyExtractor={(item) => `${item.start}-${item.end}`}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => {
        const isSelected =
          selectedSlot?.start === item.start &&
          selectedSlot?.end === item.end;

        return (
          <TouchableOpacity
            disabled={!item.isAvailable}
            onPress={() => onSelectSlot(item)}
            style={[
              styles.slotBtn,
              isSelected && styles.slotSelected,
              !item.isAvailable && styles.slotDisabled,
            ]}
          >
            <Text
              style={[
                styles.slotText,
                isSelected && styles.slotTextSelected,
                !item.isAvailable && styles.slotTextDisabled,
              ]}
            >
              {item.start} – {item.end}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default SlotSection;
