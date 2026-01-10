import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { styles } from './styles';

import PastBookings from '../../../sections/pastBook/PastBooking';
import HomeHorizontalSection from '../../../sections/HomeHoriz/HomeHorizontalSection';
import BannerCard from '../../../components/cards/banner/BannerCard';

import { fetchBanners } from '../../../app/slices/BannerSlice';
import { fetchHomeSalons } from '../../../app/slices/homeSlice';
import { fetchPastAppointments } from '../../../app/slices/appointmentSlice';

import type { RootState, AppDispatch } from '../../../app/store';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();

  /* -------- SELECTORS -------- */
  const banners = useSelector(
    (state: RootState) => state.banner.banners
  );

  const pastBookingsData = useSelector(
    (state: RootState) => state.appointment.past
  );

  const { recommended, newlyJoined, trending } = useSelector(
    (state: RootState) => state.home
  );

  /* -------- LOAD DATA -------- */
  useEffect(() => {
    dispatch(fetchBanners());
    dispatch(fetchHomeSalons());
    dispatch(fetchPastAppointments());
  }, [dispatch]);

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

      {/* -------- BANNERS -------- */}
      {banners.length > 0 &&
        banners.map(banner => (
          <BannerCard
            key={banner.id}
            image={banner.imageUrl}
            text={banner.title ?? ''}
            link={
              banner.redirectType === 'external'
                ? banner.redirectId
                : undefined
            }
            onPress={
              banner.redirectType === 'salon'
                ? () =>
                    navigation.navigate('SalonList', {
                      type: banner.redirectId,
                    })
                : undefined
            }
          />
        ))}

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

      {/* Past Bookings */}
      {pastBookingsData.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Book Again</Text>
          <PastBookings
            data={pastBookingsData}
            navigation={navigation}
          />
        </>
      )}

      {/* Recommended */}
      <HomeHorizontalSection
        title="Recommended Salons"
        data={recommended}
        onSeeMore={() =>
          navigation.navigate('SalonList', { type: 'recommended' })
        }
        onCardPress={item =>
          navigation.navigate('SalonDetail', { salonId: item.id })
        }
      />

      {/* Newly Joined */}
      <HomeHorizontalSection
        title="Newly Joined"
        data={newlyJoined}
        onSeeMore={() =>
          navigation.navigate('SalonList', { type: 'newlyJoined' })
        }
        onCardPress={item =>
          navigation.navigate('SalonDetail', { salonId: item.id })
        }
      />

      {/* Trending */}
      <HomeHorizontalSection
        title="Trending Near You"
        data={trending}
        onSeeMore={() =>
          navigation.navigate('SalonList', { type: 'trending' })
        }
        onCardPress={item =>
          navigation.navigate('SalonDetail', { salonId: item.id })
        }
      />
    </ScrollView>
  );
};

export default HomeScreen;
