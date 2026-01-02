import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { colors } from '../../../theme/colors';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

type Gender = 'Male' | 'Female' | 'Other';

interface Participant {
  id: string;
  name: string;
  phone: string;
  gender: Gender;
}

const MAX_PARTICIPANTS = 5;

const isValidPhoneNumber = (phone: string) => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
};

const GroupDetailsScreen = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState<Gender>('Male');

  const handleAddParticipant = () => {
    if (participants.length >= MAX_PARTICIPANTS) {
      Alert.alert(`Maximum ${MAX_PARTICIPANTS} participants allowed`);
      return;
    }

    if (phone && !isValidPhoneNumber(phone)) {
      Alert.alert('Please enter a valid 10-digit phone number');
      return;
    }
    const newParticipant: Participant = {
      id: Date.now().toString(),
      name,
      phone,
      gender,
    };

    setParticipants(prev => [...prev, newParticipant]);

    // reset form
    setName('');
    setPhone('');
    setGender('Male');
    setShowForm(false);
  };

  const handleRemove = (id: string) => {
    setParticipants(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Text style={styles.title}>Group Details</Text>
      <Text style={styles.subtitle}>Tell us about your group</Text>

      {/* Participants List */}
      {participants.map((item, index) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Participant {index + 1}</Text>

            <TouchableOpacity onPress={() => handleRemove(item.id)}>
              <Ionicons
                name="close-circle-outline"
                size={22}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.cardText}>Name: {item.name || '—'}</Text>
          <Text style={styles.cardText}>Phone: {item.phone || '—'}</Text>
          <Text style={styles.cardText}>Gender: {item.gender}</Text>
        </View>
      ))}

      {/* Add Person Form */}
      {showForm && (
        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Add Participant</Text>

          <TextInput
            placeholder="Name"
            placeholderTextColor={colors.textMuted}
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <TextInput
            placeholder="Phone Number"
            placeholderTextColor={colors.textMuted}
            style={styles.input}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          {/* Gender */}
          <View style={styles.genderRow}>
            {(['Male', 'Female', 'Other'] as Gender[]).map(g => (
              <TouchableOpacity
                key={g}
                style={[
                  styles.genderChip,
                  gender === g && styles.genderChipActive,
                ]}
                onPress={() => setGender(g)}
              >
                <Text
                  style={[
                    styles.genderText,
                    gender === g && styles.genderTextActive,
                  ]}
                >
                  {g}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <PrimaryButton
            title="Add"
            onPress={handleAddParticipant}
            style={{ marginTop: 16 }}
          />
        </View>
      )}

      {/* Add Another Person */}
      {!showForm && (
        <TouchableOpacity
          style={styles.addAnother}
          onPress={() => {
            if (participants.length >= MAX_PARTICIPANTS) {
              Alert.alert(`You can add only ${MAX_PARTICIPANTS} participants`);
              return;
            }
            setShowForm(true);
          }}
        >
          <Text style={styles.addAnotherText}>Add Another Person</Text>
        </TouchableOpacity>
      )}

      {/* Continue */}
      <PrimaryButton
        title="Confirm Group & Select Services"
        onPress={() => {
          // navigate to service selection
        }}
        style={styles.confirmButton}
      />
    </ScrollView>
  );
};

export default GroupDetailsScreen;
