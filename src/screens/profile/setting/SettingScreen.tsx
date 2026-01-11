import React from 'react';
import {
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

const SettingsScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <Text style={styles.title}>Settings</Text>

      {/* Notifications */}
      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('NotificationSettings')}
      >
        <Text style={styles.label}>Notifications</Text>
        <Text style={styles.value}>Manage</Text>
      </Pressable>

      {/* Language */}
      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('LanguageSelection')}
      >
        <Text style={styles.label}>Language</Text>
        <Text style={styles.value}>English</Text>
      </Pressable>

      {/* Privacy Policy */}
      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('PrivacyPolicy')}
      >
        <Text style={styles.label}>Privacy Policy</Text>
        <Text style={styles.link}>View</Text>
      </Pressable>

      {/* Terms of Service */}
      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('TermsOfService')}
      >
        <Text style={styles.label}>Terms of Service</Text>
        <Text style={styles.link}>View</Text>
      </Pressable>

      {/* Terms of Use */}
      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('TermsOfUse')}
      >
        <Text style={styles.label}>Terms of Use</Text>
        <Text style={styles.link}>View</Text>
      </Pressable>
    </ScrollView>
  );
};

export default SettingsScreen;
