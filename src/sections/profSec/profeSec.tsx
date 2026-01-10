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
  experience?: number | string;
  expertise?: string[];
  imageUrl?: string | number;
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
            {(() => {
              const img = (prof as any).imageUrl ?? (prof as any).image;
              const source = typeof img === 'number' ? img : img ? { uri: String(img) } : undefined;
              return source ? (
                <Image source={source} style={styles.avatar} />
              ) : (
                <View style={[styles.avatar, styles.avatarPlaceholder]} />
              );
            })()}
            <Text style={styles.name}>{prof.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfessionalsSection;
