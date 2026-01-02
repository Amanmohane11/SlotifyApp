import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

/* =====================
   TYPES
===================== */
interface Professional {
  id: string;
  name: string;
  experience: number;
  expertise: string;
  imageUrl: string;
}

interface ProfessionalsSectionProps {
  professionals: Professional[];
}

const ProfessionalsSection: React.FC<ProfessionalsSectionProps> = ({
  professionals,
}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Professionals</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {professionals.map(prof => (
          <TouchableOpacity
            key={prof.id}
            style={styles.avatarContainer}
            onPress={() =>
              navigation.navigate('ProfessionalDetail', {
                professional: prof,
              })
            }
          >
            <Image source={{ uri: prof.imageUrl }} style={styles.avatar} />
            <Text style={styles.name}>{prof.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfessionalsSection;
