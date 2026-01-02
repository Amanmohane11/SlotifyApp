// src/screens/NotificationsScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import NotificationCard from '../../components/cards/notificationCard/NotifyCard';
import { FlatList } from 'react-native-gesture-handler';
import { notificationsData } from '../../assets/data/saloonData';
import { styles } from './styles';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>

      <FlatList
        data={notificationsData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <NotificationCard
            icon={item.icon}
            title={item.title}
            description={item.description}
            actionText={item.actionText}
            time={item.time}
          />
        )}
      />
    </View>
  );
};

export default NotificationsScreen;
