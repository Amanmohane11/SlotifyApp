import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { colors } from '../../theme/colors';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { submitUserDetails } from '../../app/slices/userDetailSlice';
import type { AppDispatch, RootState } from '../../app/store';

type Gender = 'male' | 'female' | 'other';

const UserDetailScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState<Gender>('male');

  const { loading, error } = useSelector(
    (state: RootState) => state.userDetail,
  );

  const handleContinue = () => {
    if (!name.trim() || !city.trim()) {
      return;
    }

    dispatch(
      submitUserDetails({
        name: name.trim(),
        city: city.trim(),
        gender,
      }),
    );
  };

  const isDisabled = loading || !name || !city;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
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
          editable={!loading}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      {/* City */}
      <View style={styles.inputCard}>
        <Text style={styles.label}>Your Location</Text>
        <TextInput
          placeholder="City / Area"
          placeholderTextColor={colors.textMuted}
          value={city}
          editable={!loading}
          onChangeText={setCity}
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
              disabled={loading}
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

      {/* Error */}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* Continue */}
      <PrimaryButton
        title="Continue"
        loading={loading}
        disabled={isDisabled}
        onPress={handleContinue}
        style={styles.continueButton}
      />
    </ScrollView>
  );
};

export default UserDetailScreen;
