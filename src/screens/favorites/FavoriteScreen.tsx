import React from 'react';
import { View, Text, FlatList } from 'react-native';
// import SalonCard from '../../components/cards/saloncard/SalonCard';
import { styles } from './styles';
import { favoritesData } from '../../assets/data/saloonData';
import SalonCard from '../../components/cards/saloncard/SalonCard';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorites</Text>

      <FlatList
        data={favoritesData}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SalonCard
            name={item.name}
            category={item.category}
            rating={item.rating}
            imageUrl={item.imageUrl}
            type={item.type}
            isFavorite={true}
            onToggleFavorite={() => {
              console.log('Remove from favorites', item.name);
            }}
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
