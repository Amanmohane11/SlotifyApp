import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import SalonCard from '../../components/cards/saloncard/SalonCard';
import { styles } from './styles';

interface Props {
  title: string;
  data: any[];
  onSeeMore: () => void;
  onCardPress: (item: any) => void;
}

const HomeHorizontalSection: React.FC<Props> = ({
  title,
  data,
  onSeeMore,
  onCardPress,
}) => {
  const limitedData = data.slice(0, 10);

  return (
    <View style={styles.sectionWrapper}>
      {/* Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>

        <TouchableOpacity onPress={onSeeMore}>
          <Text style={styles.seeMoreText}>See More</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Cards */}
      <FlatList
        horizontal
        data={limitedData}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <SalonCard
            name={item.name}
            category={item.category}
            rating={item.rating}
            type={item.type}
            imageUrl={item.imageUrl}
            onPress={() => onCardPress(item)}
          />
        )}
      />
    </View>
  );
};

export default HomeHorizontalSection;
