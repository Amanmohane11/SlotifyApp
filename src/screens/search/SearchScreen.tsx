import React, { useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
  fetchHomeSalons,
  setQuery,
  setRangeKm,
} from '../../app/slices/homeSlice';
import type { RootState, AppDispatch } from '../../app/store';
import SalonCard from '../../components/cards/saloncard/SalonCard';
import { styles } from './styles';
import { colors } from '../../theme/colors';


const mergeUniqueSalons = (...lists: any[]) => {
  const map = new Map();

  lists.flat().forEach(item => {
    if (!map.has(item.id)) {
      map.set(item.id, item);
    }
  });

  return Array.from(map.values());
};

const SearchScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();

  const { query, rangeKm, recommended, trending, newlyJoined, loading } =
    useSelector((state: RootState) => state.home);


useEffect(() => {
  const timer = setTimeout(() => {
    dispatch(fetchHomeSalons());
  }, 400);

  return () => clearTimeout(timer);
}, [dispatch, query, rangeKm]);


const MergeSaloons= mergeUniqueSalons(recommended, trending, newlyJoined);

  return (
    <ScrollView>
      {/* Search box */}
      <View style={styles.searchBar}>
        {/* Search input (LEFT) */}
        <TextInput
          placeholder="Search salons or services"
          value={query}
          onChangeText={text => dispatch(setQuery(text))}
          placeholderTextColor={colors.textMuted}
          style={styles.searchInput}
        />

        {/* Divider */}
        <View style={styles.searchDivider} />

        {/* Range selector (RIGHT inside search bar) */}
        <TouchableOpacity style={styles.rangeSelector} activeOpacity={0.7}>
          <Text style={styles.rangeLabel}>{rangeKm} km</Text>
        </TouchableOpacity>
      </View>

      {/* Range */}
      <View style={styles.rangeRow}>
        {[3, 5, 7, 9, 11].map(km => (
          <TouchableOpacity
            key={km}
            onPress={() => dispatch(setRangeKm(km))}
            style={[styles.rangeChip, rangeKm === km && styles.rangeActive]}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.rangeText,
                rangeKm === km && styles.rangeTextActive,
              ]}
            >
              {km} km
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading && <Text>Loading...</Text>}

      {/* Results (merged for search) */}
      {MergeSaloons.map(salon => (
        <SalonCard
          key={salon.id}
          {...salon}
          onPress={() =>
            navigation.navigate('SalonDetail', {
              salonId: salon.id,
            })
          }
        />
      ))}
    </ScrollView>
  );
};

export default SearchScreen;
