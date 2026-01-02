import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { colors } from '../../theme/colors';
import PrimaryButton from '../../components/buttons/PrimaryButton';

const OTP_LENGTH = 6;

const LoginScreen = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));

  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.replace(/[^0-9]/g, '');
    setOtp(updatedOtp);
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');

    if (mobile.length !== 10) {
      // show validation
      return;
    }

    if (enteredOtp.length !== OTP_LENGTH) {
      // show validation
      return;
    }

    console.log('WhatsApp OTP Verify', {
      mobile,
      otp: enteredOtp,
    });

    // API verify here
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>SLOTIFY</Text>
        <Text style={styles.tagline}>Your effortless booking experience</Text>
      </View>

      {/* Login Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Welcome! Let’s get you in.</Text>

        {/* Mobile */}
        <TextInput
          style={styles.input}
          placeholder="+91 Mobile Number"
          placeholderTextColor={colors.textMuted}
          keyboardType="phone-pad"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
        />

        {/* Instruction */}
        <Text style={styles.whatsappText}>
          Enter the OTP sent to your WhatsApp
        </Text>

        {/* OTP Inputs */}
        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpBox}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={value => handleOtpChange(value, index)}
            />
          ))}
        </View>

        {/* Resend */}
        <TouchableOpacity>
          <Text style={styles.resend}>Resend OTP on WhatsApp</Text>
        </TouchableOpacity>

        {/* Verify */}
        <PrimaryButton
          title="Verify Number"
          onPress={handleVerify}
          style={styles.verifyButton}
        />
      </View>

      {/* Footer */}
      <TouchableOpacity>
        <Text style={styles.trouble}>Trouble logging in?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;
