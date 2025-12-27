import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { colors } from '../../../theme/colors';

import PrimaryButton from '../../../components/buttons/PrimaryButton';
import ReviewSection from '../../../sections/reviewSec/ReviewSection';
import { reviewsData } from '../../../assets/data/salonDetail';
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
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professionals</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            {
              id: '1',
              name: 'Anna',
              experience: 6,
              expertise: 'Hair Styling',
              imageUrl: 'https://via.placeholder.com/120',
            },
            {
              id: '2',
              name: 'Mark',
              experience: 8,
              expertise: 'Color Expert',
              imageUrl: 'https://via.placeholder.com/120',
            },
            {
              id: '3',
              name: 'Sofia',
              experience: 5,
              expertise: 'Facial & Spa',
              imageUrl: 'https://via.placeholder.com/120',
            },
          ].map(prof => (
            <TouchableOpacity
              key={prof.id}
              style={styles.profAvatarContainer}
              onPress={() =>
                navigation.navigate('ProfessionalDetail', {
                  professional: prof,
                })
              }
            >
              <Image
                source={{ uri: prof.imageUrl }}
                style={styles.profAvatar}
              />
              <Text style={styles.profName}>{prof.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/* Services */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Services</Text>

        {[
          { name: 'Women Cut', time: '60 min', price: '$75' },
          { name: 'Full Color', time: '120 min', price: '$150' },
          { name: 'Deep Conditioning', time: '30 min', price: '$45' },
          { name: 'Hair Spa', time: '45 min', price: '$60' },
          { name: 'Blow Dry', time: '30 min', price: '$40' },
        ].map((service, index) => (
          <View key={index} style={styles.serviceRow}>
            <View>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceTime}>{service.time}</Text>
            </View>

            <View style={styles.serviceRight}>
              <Text style={styles.price}>{service.price}</Text>

              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* SEE ALL SERVICES (BOTTOM) */}
        <TouchableOpacity
          style={styles.seeMoreContainer}
          onPress={() => navigation.navigate('Service')}
        >
          <Text style={styles.seeMoreText}>See all services</Text>
        </TouchableOpacity>
      </View>
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
