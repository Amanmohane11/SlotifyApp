import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export interface Professional {
  id: string;
  name?: string;
  image?: string;
  isRandom?: boolean;
}

interface Props {
  professionals: Professional[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const ProfessionalSelectSection: React.FC<Props> = ({
  professionals,
  selectedId,
  onSelect,
}) => {
  return (
    <View>
      <Text style={styles.title}>Choose Professional</Text>

      <View style={styles.professionalRow}>
        {professionals.map(pro => (
          <TouchableOpacity
            key={pro.id}
            onPress={() => onSelect(pro.id)}
            style={[
              styles.avatarWrapper,
              selectedId === pro.id && styles.avatarSelected,
            ]}
          >
            {pro.isRandom ? (
              <View style={styles.randomAvatar}>
                <Text style={styles.randomText}>🎲</Text>
              </View>
            ) : (
              <Image
                source={typeof pro.image === 'number' ? pro.image : { uri: String(pro.image) }}
                style={styles.avatar}
              />
            )}

            {pro.name && <Text style={styles.name}>{pro.name}</Text>}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProfessionalSelectSection;
