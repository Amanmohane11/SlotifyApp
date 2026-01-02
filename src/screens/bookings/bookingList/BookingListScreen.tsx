import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import {
  upcomingAppointments,
  pastAppointments,
} from '../../../assets/data/saloonData';

import UpcomingAppointmentCard from '../../../components/cards/bookingCard/upcoming/UpcomingCard';
import PastAppointmentCard from '../../../components/cards/bookingCard/past/PastCard';

const MyAppointmentsScreen = () => {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');

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
            style={[styles.tabText, tab === 'upcoming' && styles.activeTabText]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, tab === 'past' && styles.activeTab]}
          onPress={() => setTab('past')}
        >
          <Text
            style={[styles.tabText, tab === 'past' && styles.activeTabText]}
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
          renderItem={({ item }) => <UpcomingAppointmentCard item={item} />}
        />
      ) : (
        <FlatList
          data={pastAppointments}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => <PastAppointmentCard item={item} />}
        />
      )}
    </View>
  );
};

export default MyAppointmentsScreen;
