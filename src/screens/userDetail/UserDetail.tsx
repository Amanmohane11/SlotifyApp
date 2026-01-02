import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { styles } from './styles';
import { colors } from '../../theme/colors';
import PrimaryButton from '../../components/buttons/PrimaryButton';

type Gender = 'male' | 'female' | 'other';

const UserDetailScreen = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState<Gender>('male');

  const handleContinue = () => {
    const payload = {
      name,
      location,
      gender,
    };

    console.log('User Profile:', payload);
    // navigate to next screen
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>SLOTIFY</Text>
        <Text style={styles.tagline}>Your effortless booking experience</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Tell us about yourself</Text>

      {/* Name */}
      <View style={styles.inputCard}>
        <Text style={styles.label}>Your Name</Text>
        <TextInput
          placeholder="Enter your full name"
          placeholderTextColor={colors.textMuted}
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      {/* Location */}
      <View style={styles.inputCard}>
        <Text style={styles.label}>Your Location</Text>
        <TextInput
          placeholder="City & Country"
          placeholderTextColor={colors.textMuted}
          value={location}
          onChangeText={setLocation}
          style={styles.input}
        />
      </View>

      {/* Gender */}
      <View style={styles.inputCard}>
        <Text style={styles.label}>Gender</Text>

        <View style={styles.genderRow}>
          {(['male', 'female', 'other'] as Gender[]).map(item => (
            <TouchableOpacity
              key={item}
              style={[
                styles.genderOption,
                gender === item && styles.genderActive,
              ]}
              onPress={() => setGender(item)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === item && styles.genderTextActive,
                ]}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Continue */}
      <PrimaryButton
        title="Continue"
        onPress={handleContinue}
        style={styles.continueButton}
      />
    </ScrollView>
  );
};

export default UserDetailScreen;
