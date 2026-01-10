import React, { useEffect } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';
import ProfessionalSelectSection from '../../../sections/profSelect/ProfSelect';
import DateSelectSection from '../../../sections/dateSelec/DateSelect';
import SlotSection from '../../../sections/slotSec/SlotSection';

import type { RootState, AppDispatch } from '../../../app/store';
import {
  setProfessional,
  setDate,
  setSlot,
} from '../../../app/slices/BookingSlice';
import { fetchSalonAvailability } from '../../../app/slices/SaloonDetailSlice';

const SlotSelectionScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const dispatch = useDispatch<AppDispatch>();

  const { salonId } = route.params;

  const {
    professionals,
    availableDates,
    slots,
  } = useSelector((state: RootState) => state.saloonDetail);

  const {
    professionalId,
    dateId,
    slot,
    selectedServices,
  } = useSelector((state: RootState) => state.booking);

  /* ======================
     FETCH AVAILABILITY
  ====================== */
  useEffect(() => {
    if (!dateId || selectedServices.length === 0) return;

    dispatch(
      fetchSalonAvailability({
        salonId,
        date: dateId,
        professionalId,
        serviceIds: selectedServices.map(s => s.id),
      })
    );
  }, [dateId, professionalId, selectedServices, salonId, dispatch]);

  const handleProceed = () => {
    if (!professionalId || !dateId || !slot) return;
    navigation.navigate('ReviewScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfessionalSelectSection
        professionals={professionals}
        selectedId={professionalId ?? ''}
        onSelect={(id) => dispatch(setProfessional(id))}
      />

      <DateSelectSection
        dates={availableDates}
        selectedDateId={dateId ?? ''}
        onSelectDate={(id) => dispatch(setDate(id))}
      />

      <SlotSection
        slots={slots}
        selectedSlot={slot}
        onSelectSlot={(s) => dispatch(setSlot(s))}
      />

      <TouchableOpacity
        style={styles.proceedBtn}
        onPress={handleProceed}
        disabled={!slot}
      >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SlotSelectionScreen;
