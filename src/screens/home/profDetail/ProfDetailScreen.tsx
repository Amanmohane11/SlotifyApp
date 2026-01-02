import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import ProfessionalCard from '../../../components/cards/profCard/ProfesCard';
import { styles } from './styles';

const ProfessionalDetailScreen = () => {
  const route = useRoute<any>();
  const { professional } = route.params;

  return (
    <View style={styles.container}>
      <ProfessionalCard
        name={professional.name}
        experience={professional.experience}
        expertise={professional.expertise}
        imageUrl={professional.imageUrl}
      />
    </View>
  );
};

export default ProfessionalDetailScreen;
