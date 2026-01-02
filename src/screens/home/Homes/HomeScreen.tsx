import React from 'react';
import SalonCard from '../../../components/cards/saloncard/SalonCard';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

import { styles } from './styles';
import PastBookings from '../../../sections/pastBook/PastBooking';
import { pastBookingsData } from '../../../assets/data/salonDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: spacing.xxl }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.greeting}>Hi, Aman</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={styles.notificationButton}
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for salons & services"
          placeholderTextColor={colors.textMuted}
          style={styles.searchInput}
        />
      </View>

      {/* Offer Banner */}
      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100x100' }}
          style={styles.bannerImage}
        />
        <Text style={styles.bannerText}>
          SPRING SALE: 50% Off First Booking. Limited Time!
        </Text>
      </View>

      {/* Services */}
      <Text style={styles.sectionTitle}>Services Offered</Text>

      <View style={styles.servicesRow}>
        {['Hair', 'Nails', 'Massage', 'Facial', 'Barber'].map(service => (
          <TouchableOpacity key={service} style={styles.serviceItem}>
            <View style={styles.serviceIcon} />
            <Text style={styles.serviceText}>{service}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Past Bookings - Rebook */}
      <Text style={styles.sectionTitle}>Rebook from Past Appointments</Text>

      {pastBookingsData.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Rebook from Past Appointments</Text>
          <PastBookings data={pastBookingsData} navigation={navigation} />
        </>
      )}

      {/* Recommended */}
      <Text style={styles.sectionTitle}>Recommended Salons</Text>

      <SalonCard
        name="The Golden Comb"
        category="Hair & Beauty"
        type="Unisex"
        rating={4.9}
        imageUrl="https://via.placeholder.com/300x180"
        onPress={() =>
          navigation.navigate('SalonDetail', {
            salonId: '1',
            salonName: 'The Golden Comb',
            salonType: 'Unisex',
          })
        }
      />

      <SalonCard
        name="Elite Spa & Wellness"
        category="Hair & Beauty"
        type="Male Only"
        imageUrl="https://via.placeholder.com/300x180"
        onPress={() =>
          navigation.navigate('SalonDetail', {
            salonId: '2',
            salonName: 'Elite Spa & Wellness',
            salonType: 'Male Only',
          })
        }
      />
    </ScrollView>
  );
};

export default HomeScreen;
