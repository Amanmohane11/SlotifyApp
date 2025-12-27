import React from 'react';
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
// import { typography } from '../../theme/typography';

import { styles } from './styles';

const HomeScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: spacing.xxl }}
      showsVerticalScrollIndicator={false}
    >
      {/* Greeting */}
      <Text style={styles.greeting}>Hi, Aman</Text>

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

      {/* Stats */}
      <Text style={styles.sectionTitle}>Stats & Trust</Text>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>1.2M+</Text>
          <Text style={styles.statLabel}>Appointments</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statValue}>500+</Text>
          <Text style={styles.statLabel}>Businesses</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statValue}>4.9★</Text>
          <Text style={styles.statLabel}>Trusted</Text>
        </View>
      </View>

      {/* Recommended */}
      <Text style={styles.sectionTitle}>Recommended Salons</Text>

      <View style={styles.salonCard}>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x180' }}
          style={styles.salonImage}
        />
        <Text style={styles.salonName}>The Golden Comb</Text>
        <Text style={styles.salonCategory}>Hair & Beauty • Unisex</Text>
        <Text style={styles.salonRating}>Rating: 4.9 ★</Text>
      </View>

      <View style={styles.salonCard}>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x180' }}
          style={styles.salonImage}
        />
        <Text style={styles.salonName}>Elite Spa & Wellness</Text>
        <Text style={styles.salonCategory}>Hair & Beauty</Text>
        <Text style={styles.salonRating}>New</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
