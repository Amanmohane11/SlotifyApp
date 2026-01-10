import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
// import SalonCard from '../../components/cards/saloncard/SalonCard';
import { styles } from './styles';
// import { favoritesData } from '../../assets/data/saloonData';
import SalonCard from '../../components/cards/saloncard/SalonCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import {
  fetchFavoriteSalons,
  toggleFavoriteSalon,
} from '../../app/slices/HomeSlice';

const FavoritesScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const favoritesData = useSelector((State: RootState) => State.home.favorites);

  /* -------- FETCH FAVORITES -------- */
  useEffect(() => {
    dispatch(fetchFavoriteSalons());
  }, [dispatch]);

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
            imageUrl={
              item.imageUrl ?? require('../../assets/images/saloonImage.jpg')
            }
            type={item.type}
            isFavorite={true}
            onToggleFavorite={() => {
              dispatch(toggleFavoriteSalon(item.id));
            }}
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
