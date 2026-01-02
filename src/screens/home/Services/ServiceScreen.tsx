import React, { useRef, useState } from 'react';
import { View, SectionList } from 'react-native';
import { styles } from './styles';
import ServiceCategoryTabs from '../../../sections/categTab/CategorySection';
import {
  CATEGORIES,
  SERVICES,
  servicesData,
} from '../../../assets/data/salonDetail';
import ServiceSection from '../../../sections/serviceSec/ServiceSection';

const ServiceScreen = () => {
  const sectionListRef = useRef<SectionList>(null);
  const [activeCategory, setActiveCategory] = useState('Hair');

  const onCategoryPress = (category: string) => {
    setActiveCategory(category);
    const index = SERVICES.findIndex(s => s.title === category);
    if (index !== -1) {
      sectionListRef.current?.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* CATEGORY TABS */}
      <ServiceCategoryTabs
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryPress={onCategoryPress}
      />

      {/* SERVICES */}
      <ServiceSection
        services={servicesData}
        onAddPress={service => {
          console.log('Added:', service);
        }}
      />
    </View>
  );
};

export default ServiceScreen;
