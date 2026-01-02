import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { colors } from '../../../theme/colors';

import PrimaryButton from '../../../components/buttons/PrimaryButton';
import ReviewSection from '../../../sections/reviewSec/ReviewSection';
import {
  professionalsData,
  reviewsData,
  servicesData,
} from '../../../assets/data/salonDetail';
import ProfessionalsSection from '../../../sections/profSec/profeSec';
import ServiceSection from '../../../sections/serviceSec/ServiceSection';
// import ProfessionalCard from '../../../components/cards/profCard/ProfesCard';

const SalonDetailScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { salonName, salonType } = route.params || {};

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Image */}
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x260' }}
          style={styles.coverImage}
        />

        {/* Favourite */}
        <TouchableOpacity style={styles.heartIcon}>
          <Text style={{ color: colors.primary }}>♥</Text>
        </TouchableOpacity>
      </View>
      {/* Salon Info */}
      <View style={styles.section}>
        <Text style={styles.salonName}>{salonName}</Text>
        <Text style={styles.subText}>Hair & Beauty • {salonType}</Text>

        <Text style={styles.rating}>⭐ 4.9 (1.2K reviews)</Text>

        <TouchableOpacity>
          <Text style={styles.link}>Get Directions</Text>
        </TouchableOpacity>
      </View>
      {/* Professionals */}
      <ProfessionalsSection professionals={professionalsData} />
      {/* Services */}
      <ServiceSection
        services={servicesData}
        showSeeAll={true} // 👈 SHOW
        onAddPress={service => {
          console.log('Added:', service);
        }}
        onSeeAllPress={() => navigation.navigate('Service')}
      />
      {/* Availability */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Availability</Text>

        {[
          { day: 'Monday', time: '8:30 AM - 9 PM' },
          { day: 'Sunday', time: '10:30 AM - 8 PM' },
          { day: 'Today', time: '2:30 PM - 9 PM' },
        ].map((item, index) => (
          <View key={index} style={styles.availabilityRow}>
            <Text style={styles.day}>{item.day}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        ))}
      </View>
      {/* Reviews */}
      <ReviewSection reviews={reviewsData} />;{/* Book Button */}
      <View style={styles.footer}>
        <PrimaryButton
          title="Book Now"
          onPress={() => navigation.navigate('Service')}
        />
      </View>
    </ScrollView>
  );
};

export default SalonDetailScreen;
