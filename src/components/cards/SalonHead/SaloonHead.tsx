import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../../theme/colors';
import { styles } from './styles';

const { width } = Dimensions.get('window');

interface SalonHeaderProps {
  name: string;
  type: string;
  rating: number;
  ratingCount: number;

  images: string[];

  isFavorite: boolean;
  latitude?: number;
  longitude?: number;

  onToggleFavorite: () => void;
  onGetDirections?: (lat: number, lng: number) => void;
}

export const SalonHeader: React.FC<SalonHeaderProps> = ({
  name,
  type,
  rating,
  ratingCount,
  images,
  isFavorite,
  latitude,
  longitude,
  onToggleFavorite,
  onGetDirections,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [index, setIndex] = useState(0);

  const animateHeart = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.35,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleFavorite = () => {
    animateHeart();
    onToggleFavorite();
  };

  const handleDirections = () => {
    if (!latitude || !longitude) return;
    onGetDirections?.(latitude, longitude);
  };

  return (
    <View style={styles.container}>
      {/* IMAGE CAROUSEL */}
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        onMomentumScrollEnd={e =>
          setIndex(Math.round(e.nativeEvent.contentOffset.x / width))
        }
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />

      {/* GRADIENT OVERLAY */}
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.9)']}
        style={StyleSheet.absoluteFill}
      />

      {/* FAVORITE */}
      <TouchableOpacity
        style={styles.heartBtn}
        onPress={handleFavorite}
        activeOpacity={0.8}
      >
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Icon
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={22}
            color={colors.primary}
          />
        </Animated.View>
      </TouchableOpacity>

      {/* PAGINATION DOTS */}
      {images.length > 1 && (
        <View style={styles.dots}>
          {images.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === index && styles.dotActive,
              ]}
            />
          ))}
        </View>
      )}

      {/* TEXT + BUTTON */}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>

        <View style={styles.ratingRow}>
          <Icon name="star" size={14} color={colors.primary} />
          <Text style={styles.rating}>
            Rating {rating.toFixed(1)} ({ratingCount})
          </Text>
        </View>

        <TouchableOpacity
          style={styles.directionBtn}
          onPress={handleDirections}
          activeOpacity={0.85}
        >
          <Text style={styles.directionText}>Get Directions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
