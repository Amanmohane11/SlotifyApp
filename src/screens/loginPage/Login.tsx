import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { colors } from '../../theme/colors';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { verifyOtp } from '../../app/slices/AuthSlice';

const OTP_LENGTH = 6;

const LoginScreen = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const inputsRef = useRef<Array<TextInput | null>>([]);
  const navigation = useNavigation<any>();
  

  const dispatch = useDispatch<AppDispatch>();

  const { loading, isLoggedIn ,user ,error} = useSelector(
  (state: RootState) => state.auth
  
);

 useEffect(() => {
    if (isLoggedIn && user) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: user.profileCompleted
              ? 'Home'
              : 'UserDetails',
          },
        ],
      });
    }
  }, [isLoggedIn, user, navigation]);

const handleVerify = () => {
  const enteredOtp = otp.join('');

  if (mobile.length !== 10 || enteredOtp.length !== OTP_LENGTH) {
    return;
  }

  dispatch(
    verifyOtp({
      mobile,
      otp: enteredOtp,
    })
  );

};


  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.replace(/[^0-9]/g, '');
    setOtp(updatedOtp);
  };

   const handleKeyPress = (
    e: any,
    index: number
  ) => {
    if (
      e.nativeEvent.key === 'Backspace' &&
      otp[index] === '' &&
      index > 0
    ) {
      inputsRef.current[index - 1]?.focus();
    }
  };

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
        {/* <Text style={styles.logoText}>SLOTIFY</Text> */}
        {/* <Text style={styles.tagline}>Your effortless booking experience</Text> */}
      </View>

      {/* Login Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Welcome! Let’s get you in.</Text>

        {/* Mobile */}
        <TextInput
          style={styles.input}
          editable={!loading}
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
              ref={ref => {
                inputsRef.current[index] = ref;
              }}
              style={styles.otpBox}
              keyboardType="number-pad"
              maxLength={1}
              editable={!loading}
              value={digit}
              onChangeText={value => {
                handleOtpChange(value, index);
                if (value && index < OTP_LENGTH - 1) {
                  inputsRef.current[index + 1]?.focus();
                }
              }}
              onKeyPress={e => handleKeyPress(e, index)}
            />
          ))}
        </View>
         
       {/* Error */}
     {error && (
      <Text style={styles.errorText}>
       {error}
     </Text>
         )}

   
        {/* Resend */}
         <TouchableOpacity disabled={loading}>
          <Text style={styles.resend}>
            Resend OTP on WhatsApp
          </Text>
        </TouchableOpacity>

        {/* Verify */}
        <PrimaryButton
          title="Verify Number"
          loading={loading}
          disabled={loading}
          onPress={handleVerify}
          style={styles.verifyButton}
        />
      </View>

      {/* Footer */}
      {/* <TouchableOpacity>
        <Text style={styles.trouble}>Trouble logging in?</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

export default LoginScreen;
