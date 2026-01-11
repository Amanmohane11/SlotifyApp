import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../app/store';

import { submitUserDetails } from '../../../app/slices/UserDetailSlice';

import { colors } from '../../../theme/colors';
import { styles } from './styles';

import type { Gender } from '../../../app/types/common';

const EditProfileScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { profile, loading } = useSelector(
    (state: RootState) => state.userDetail
  );

  /* 🔹 Local editable state */
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState<Gender>('male');

  /* 🔹 Prefill from Redux */
  useEffect(() => {
    if (profile) {
      setName(profile.name ?? '');
      setCity(profile.city ?? '');
      setGender(profile.gender ?? 'male');
    }
  }, [profile]);

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert('Validation error', 'Name is required');
      return;
    }

    dispatch(
      submitUserDetails({
        name,
        city,
        gender,
      })
    )
      .unwrap()
      .then(() => {
        Alert.alert('Success', 'Profile updated successfully');
      })
      .catch(err => {
        Alert.alert('Error', err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      {/* Name */}
      <View style={styles.field}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor={colors.textMuted}
          style={styles.input}
        />
      </View>

      {/* Phone Number (Read-only) */}
      <View style={styles.field}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          value={profile?.mobile ?? ''}
          editable={false}
          style={[styles.input, styles.inputDisabled]}
        />
      </View>

      {/* Address (stored as city) */}
      <View style={styles.field}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          value={city}
          onChangeText={setCity}
          placeholder="Enter your address"
          placeholderTextColor={colors.textMuted}
          style={[styles.input, styles.multiline]}
          multiline
        />
      </View>

      {/* Gender */}
      <View style={styles.field}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderRow}>
          {(['male', 'female', 'other'] as Gender[]).map(item => {
            const selected = gender === item;

            return (
              <TouchableOpacity
                key={item}
                style={[
                  styles.genderButton,
                  selected && styles.genderButtonSelected,
                ]}
                onPress={() => setGender(item)}
              >
                <Text
                  style={[
                    styles.genderText,
                    selected && styles.genderTextSelected,
                  ]}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSave}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={colors.textInverse} />
        ) : (
          <Text style={styles.saveButtonText}>Save Changes</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;
