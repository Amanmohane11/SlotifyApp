import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';

import UpcomingAppointmentCard from '../../../components/cards/bookingCard/upcoming/UpcomingCard';
import PastAppointmentCard from '../../../components/cards/bookingCard/past/PastCard';

import {
  fetchUpcomingAppointments,
  fetchPastAppointments,
} from '../../../app/slices/appointmentSlice';
import type { RootState, AppDispatch } from '../../../app/store';

const MyAppointmentsScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingAppointments = useSelector(
    (state: RootState) => state.appointment.upcoming
  );
  const pastAppointments = useSelector(
    (state: RootState) => state.appointment.past
  );

  /* ======================
     FETCH APPOINTMENTS
  ====================== */
  useEffect(() => {
    // fetch both once
    dispatch(fetchUpcomingAppointments());
    dispatch(fetchPastAppointments());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>My Appointments</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, tab === 'upcoming' && styles.activeTab]}
          onPress={() => setTab('upcoming')}
        >
          <Text
            style={[
              styles.tabText,
              tab === 'upcoming' && styles.activeTabText,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, tab === 'past' && styles.activeTab]}
          onPress={() => setTab('past')}
        >
          <Text
            style={[
              styles.tabText,
              tab === 'past' && styles.activeTabText,
            ]}
          >
            Past
          </Text>
        </TouchableOpacity>
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>
        {tab === 'upcoming' ? 'Upcoming Bookings' : 'Past Bookings'}
      </Text>

      {/* List */}
      {tab === 'upcoming' ? (
        <FlatList
          data={upcomingAppointments}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => (
            <UpcomingAppointmentCard item={item} />
          )}
        />
      ) : (
        <FlatList
          data={pastAppointments}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => (
            <PastAppointmentCard item={item} />
          )}
        />
      )}
    </View>
  );
};

export default MyAppointmentsScreen;
