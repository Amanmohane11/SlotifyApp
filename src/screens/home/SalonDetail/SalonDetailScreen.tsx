import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import ReviewSection from '../../../sections/reviewSec/ReviewSection';
import ProfessionalsSection from '../../../sections/profSec/profeSec';
import ServiceSection, {
} from '../../../sections/serviceSec/ServiceSection';
import { SalonHeader } from '../../../components/cards/SalonHead/SaloonHead';
import type { ServiceItem } from '../../../app/types/salon';


import type { RootState, AppDispatch } from '../../../app/store';
import {
  fetchSalonDetail,
  fetchSalonReviews,
  fetchSalonServices,
} from '../../../app/slices/SaloonDetailSlice';
import { toggleService } from '../../../app/slices/BookingSlice';
import { toggleFavoriteSalon } from '../../../app/slices/HomeSlice';

const SalonDetailScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const dispatch = useDispatch<AppDispatch>();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const favorites = useSelector(
  (state: RootState) => state.home.favorites
);


  const selectedServices = useSelector(
    (state: RootState) => state.booking.selectedServices,
  );

  const { salonId } = route.params;

  const { salon, services, reviews, loading } = useSelector(
    (state: RootState) => state.saloonDetail,
  );




  const isFavorite = useMemo(() => {
  if (!salon) return false;
  return favorites.some(f => f.id === salon.id);
}, [favorites, salon]);
    

  useEffect(() => {
    dispatch(fetchSalonDetail({ salonId }));
    dispatch(fetchSalonServices({ salonId }));
    dispatch(fetchSalonReviews({ salonId }));
  }, [salonId, dispatch]);

 

  const openMap = (lat: number, lng: number) => {
    Alert.alert('Get Directions', `Navigate to: ${lat}, ${lng}`);
  };

  /* ======================
     SERVICES LOGIC (SAFE)
  ====================== */
  const categories = useMemo(() => services.map(s => s.title), [services]);

  useEffect(() => {
    if (!selectedCategory && services.length) {
      setSelectedCategory(services[0].title);
    }
  }, [services, selectedCategory]);

  const filteredServices = useMemo(() => {
    return services.find(s => s.title === selectedCategory)?.data ?? [];
  }, [selectedCategory, services]);

  const serviceItemsForSection = useMemo(() => {
    return (filteredServices ?? []).map((s, i) => ({
      id: (s as any).id ?? `${s.name}-${i}`,
      name: s.name,
     time: Number(s.time),
       price: Number(s.price),
      category: (s as any).category ?? selectedCategory ?? 'General',
    }));
  }, [filteredServices, selectedCategory]);


const handleToggleFavorite = () => {
  if (!salon) return;
  dispatch(toggleFavoriteSalon(salon.id));
};


  const handleServiceToggle = (service: ServiceItem) => {
    dispatch(toggleService(service));
  };

  if (loading.salon || !salon) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SalonHeader
        name={salon.name}
        type={salon.category}
        rating={salon.rating}
        ratingCount={salon.reviewCount}
        images={salon.images ?? []}
        isFavorite={isFavorite}
        latitude={salon.latitude}
        longitude={salon.longitude}
        onToggleFavorite={handleToggleFavorite}
        onGetDirections={openMap}
      />

      <ProfessionalsSection professionals={salon.professionals ?? []} />

      <ServiceSection
        services={serviceItemsForSection}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        selectedServices={selectedServices}
        onServiceToggle={handleServiceToggle}
        showSeeAll
        onSeeAllPress={() => navigation.navigate('Service')}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Availability</Text>
        {(salon.availability ?? []).map((item, index) => (
          <View key={index} style={styles.availabilityRow}>
            <Text style={styles.day}>{item.day}</Text>
            <Text style={styles.time}>
              {item.isOpen
                ? item.displayTime ?? `${item.startTime} - ${item.endTime}`
                : 'Closed'}
            </Text>
          </View>
        ))}
      </View>

      <ReviewSection
        reviews={reviews.map(r => ({
          ...r,
          professionalName: r.professionalName ?? 'Staff',
        }))}
      />

      <View style={styles.footer}>
        {selectedServices.length === 0 ? (
          <PrimaryButton
            title="Book Now"
            onPress={() => navigation.navigate('Service')}
          />
        ) : (
          <PrimaryButton
            title={`Continue (${selectedServices.length})`}
            onPress={() =>
              navigation.navigate('SelectSlot', {
                // services: selectedServices,
                salonId: salon.id,
              })
            }
          />
        )}
      </View>
    </ScrollView>
  );
};

export default SalonDetailScreen;
