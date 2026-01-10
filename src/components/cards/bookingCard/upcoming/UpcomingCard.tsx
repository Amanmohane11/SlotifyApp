import React from 'react';
import { View, Text, Image } from 'react-native';
import PrimaryButton from '../../../buttons/PrimaryButton';
import { styles } from './styles';

const UpcomingAppointmentCard = ({ item }: any) => {
  return (
    <View style={styles.card}>
      {item.image && <Image source={item.image} style={styles.image} />}

      <Text style={styles.salon}>{item.salon}</Text>

      <View style={styles.row}>
        <Text style={styles.date}>{item.datetime}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <PrimaryButton
          title="Reschedule"
          style={{ flex: 1, marginRight: 8 }}
          onPress={() => {}}
        />
        <PrimaryButton
          title="Cancel Appointment"
          variant="outline"
          style={{ flex: 1 }}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default UpcomingAppointmentCard;
