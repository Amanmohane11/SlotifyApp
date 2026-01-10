import React, { useRef, useState, useMemo } from 'react';
import {
  View,
  SectionList,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import ServiceCategoryTabs from '../../../sections/categTab/CategorySection';
import AllServicesSection from '../../../sections/AllService/AllServiceSection';

import type {
  ServiceItem,
  ServiceCategory,
} from '../../../app/types/salon';
import type { RootState, AppDispatch } from '../../../app/store';
import { toggleService } from '../../../app/slices/BookingSlice';

const ServiceScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();

  const sectionListRef =
    useRef<SectionList<ServiceItem, ServiceCategory>>(null);

  /* ======================
     REDUX DATA
  ====================== */
  const { services } = useSelector(
    (state: RootState) => state.saloonDetail
  );

  const selectedServices = useSelector(
    (state: RootState) => state.booking.selectedServices
  );

  /* ======================
     DERIVED DATA
  ====================== */
  const categories = useMemo(
    () => services.map(section => section.title),
    [services]
  );

  /* ======================
     LOCAL UI STATE
  ====================== */
  const [activeCategory, setActiveCategory] = useState(
    categories[0] ?? ''
  );

  /* ======================
     HANDLERS
  ====================== */
  const handleAddService = (service: ServiceItem) => {
    dispatch(toggleService(service));
  };

  const onCategoryPress = (category: string) => {
    setActiveCategory(category);

    const index = services.findIndex(
      section => section.title === category
    );

    if (index !== -1) {
      sectionListRef.current?.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        animated: true,
      });
    }
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: any) => {
      const firstVisible = viewableItems.find(
        (item: any) => item.section?.title
      );

      if (
        firstVisible &&
        firstVisible.section.title !== activeCategory
      ) {
        setActiveCategory(firstVisible.section.title);
      }
    }
  ).current;

  /* ======================
     GUARD
  ====================== */
  if (!services.length) {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff', padding: 20 }}>
          Loading services...
        </Text>
      </View>
    );
  }

  /* ======================
     RENDER
  ====================== */
  return (
    <View style={styles.container}>
      <ServiceCategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryPress={onCategoryPress}
      />

      <SectionList<ServiceItem, ServiceCategory>
        ref={sectionListRef}
        sections={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AllServicesSection
            service={item}
            onAddPress={handleAddService}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>
            {section.title}
          </Text>
        )}
        nestedScrollEnabled
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        contentContainerStyle={
          selectedServices.length
            ? styles.contentWithSelected
            : styles.contentDefault
        }
        showsVerticalScrollIndicator={false}
      />

      {selectedServices.length > 0 && (
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() =>
              navigation.navigate('SelectSlot')
            }
          >
            <Text style={styles.continueText}>
              Continue ({selectedServices.length})
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ServiceScreen;
