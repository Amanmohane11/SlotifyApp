import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface SalonCardProps {
  name: string;
  category: string;
  rating?: number;
  imageUrl: string;
  type: string; // Unisex / Men / Women
  isFavorite?: boolean; // ✅ NEW
  onToggleFavorite?: () => void; // ✅ NEW
  onPress?: () => void;
}

const SalonCard: React.FC<SalonCardProps> = ({
  name,
  category,
  rating,
  imageUrl,
  type,
  isFavorite = false,
  onToggleFavorite,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.card}
    >
      {/* Image Wrapper */}
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        {/* ❤️ Favorite Button (Top Right) */}
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={onToggleFavorite}
          activeOpacity={0.8}
        >
          <Text style={styles.favoriteIcon}>{isFavorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>

        {/* Type Badge (Bottom Right) */}
        <View style={styles.typeBadge}>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>

        {rating !== undefined && (
          <Text style={styles.rating}>⭐ {rating.toFixed(1)}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SalonCard;
