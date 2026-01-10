import React from 'react';
import { View, Text, Image } from 'react-native';
import PrimaryButton from '../../../buttons/PrimaryButton';
import { styles } from './styles';

const PastAppointmentCard = ({ item }: any) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.salon}>{item.salon}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <PrimaryButton title="Book Again" variant="outline" onPress={() => {}} />
    </View>
  );
};

export default PastAppointmentCard;
