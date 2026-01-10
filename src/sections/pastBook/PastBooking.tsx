import React from 'react';
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { spacing } from '../../theme/spacing';
import { styles } from './styles';
import { Appointment } from '../../app/types/appointment';



interface Props {
 data: Appointment[];
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
              // salonName: item.salonName,
              // salonType: item.salonId,
            })
          }
        >
          <Image
            source={typeof item.image === 'number' ? item.image : { uri: String(item.image) }}
            style={styles.rebookImage}
          />

          <Text style={styles.rebookSalon}>{item.salonName}</Text>
          <Text style={styles.rebookService}>{item.serviceNames}</Text>

          <Text style={styles.rebookAction}>Rebook</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default PastBookings;
