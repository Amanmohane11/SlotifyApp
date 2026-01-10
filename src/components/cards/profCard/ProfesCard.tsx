import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ProfessionalCardProps {
  name: string;
  experience: number; // in years
  expertise: string;
  imageUrl: string | number;
  selected?: boolean;
  onPress?: () => void;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  name,
  experience,
  expertise,
  imageUrl,
  selected = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.card, selected && styles.selectedCard]}
    >
      <Image source={typeof imageUrl === 'number' ? imageUrl : { uri: String(imageUrl) }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.experience}>{experience} yrs experience</Text>

        <Text style={styles.expertise}>Expertise: {expertise}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfessionalCard;
