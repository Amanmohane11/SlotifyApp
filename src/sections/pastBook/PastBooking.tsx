import React from 'react';
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { spacing } from '../../theme/spacing';
import { styles } from './styles';

interface PastBooking {
  id: string;
  name: string;
  service: string;
  image: string;
  type: string;
}

interface Props {
  data: PastBooking[];
  navigation: any;
}

const PastBookings: React.FC<Props> = ({ data, navigation }) => {
  if (!data || data.length === 0) return null;

  return (
    <ScrollView
      horizontal
      nestedScrollEnabled
      showsHorizontalScrollIndicator={false}
      style={{ marginBottom: spacing.lg }}
    >
      {data.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.rebookCard}
          onPress={() =>
            navigation.navigate('SalonDetail', {
              salonId: item.id,
              salonName: item.name,
              salonType: item.type,
            })
          }
        >
          <Image source={{ uri: item.image }} style={styles.rebookImage} />

          <Text style={styles.rebookSalon}>{item.name}</Text>
          <Text style={styles.rebookService}>{item.service}</Text>

          <Text style={styles.rebookAction}>Rebook</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default PastBookings;
