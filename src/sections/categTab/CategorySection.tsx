import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface Props {
  categories: string[];
  activeCategory: string;
  onCategoryPress: (category: string) => void;
}

const ServiceCategoryTabs: React.FC<Props> = ({
  categories,
  activeCategory,
  onCategoryPress,
}) => {
  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item}
      contentContainerStyle={styles.categoryRow}
      renderItem={({ item }) => {
        const isActive = activeCategory === item;

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={styles.categoryBtn}
          >
            <Text
              style={[styles.categoryText, isActive && styles.categoryActive]}
            >
              {item}
            </Text>

            {isActive && <View style={styles.underline} />}
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ServiceCategoryTabs;
