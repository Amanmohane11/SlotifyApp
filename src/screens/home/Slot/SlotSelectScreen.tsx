import React, { useState } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import ProfessionalSelectSection from '../../../sections/profSelect/ProfSelect';
import {
  availableDates,
  professionalSelectData,
  slots,
} from '../../../assets/data/salonDetail';
import SlotSection from '../../../sections/slotSec/SlotSection';
import DateSelectSection from '../../../sections/dateSelec/DateSelect';

const SlotSelectionScreen = () => {
  const [selectedPro, setSelectedPro] = useState('1');
  const [selectedSlot, setSelectedSlot] = useState('12:00 PM');
  const [selectedDateId, setSelectedDateId] = useState(availableDates[0].id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      {/* <Text style={styles.title}>Choose Professional</Text> */}
      {/* Professionals */}
      <ProfessionalSelectSection
        professionals={professionalSelectData}
        selectedId={selectedPro}
        onSelect={setSelectedPro}
      />
      ;{/* Date Selector */}
      <DateSelectSection
        dates={availableDates}
        selectedDateId={selectedDateId}
        onSelectDate={setSelectedDateId}
      />
      ;{/* Slots */}
      <SlotSection
        slots={slots}
        selectedSlot={selectedSlot}
        onSelectSlot={setSelectedSlot}
      />
      ;{/* Proceed Button */}
      <TouchableOpacity style={styles.proceedBtn}>
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SlotSelectionScreen;
