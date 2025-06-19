import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

export default function LoginPageScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [otp, setOtp] = useState('');

  const sendOtp = async () => {
    if (phoneNumber.length !== 10) {
      Alert.alert('Error', 'Enter a valid 10 digit number');
      return;
    }
    try {
      const confirmation = await auth().signInWithPhoneNumber('+91' + phoneNumber);
      setConfirm(confirmation);
      Alert.alert('OTP Sent', 'Check your SMS for OTP');
    } catch (err) {
      console.log(err);
      Alert.alert('Error', 'Failed to send OTP');
    }
  };

  const confirmOTP = async () => {
    try {
      await confirm.confirm(otp);
      Alert.alert('Success', 'Logged in');
      navigation.replace('MainTabs'); // redirect after login
      //loading screen needed alert takes alot of time
    } catch (err) {
      Alert.alert('Invalid OTP', 'Try again');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.heading}>Login/Register</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MainTabs')}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/046/045/180/non_2x/rounded-rectangular-icon-rectangle-shape-vector.jpg' }}
        style={styles.image}
      />

      {!confirm ? (
        <>
          <Text style={styles.label}>What's your mobile number?</Text>
          <Text style={styles.subLabel}>A verification code will be sent to this number</Text>

          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter your 10 digit phone number"
            placeholderTextColor="#999"
            keyboardType="numeric"
            style={styles.input}
          />

          <TouchableOpacity onPress={sendOtp} style={styles.button}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.label}>Enter OTP</Text>
          <TextInput
            value={otp}
            onChangeText={setOtp}
            placeholder="Enter OTP"
            placeholderTextColor="#999"
            keyboardType="numeric"
            style={styles.input}
            maxLength={6}
          />

          <TouchableOpacity onPress={confirmOTP} style={styles.button}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}

      <Text style={styles.terms}>By logging in you agree to the T&C</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  heading: { fontSize: 20, fontWeight: 'bold' },
  skip: { color: 'blue', fontSize: 14 },
  image: { width: '100%', height: 180, marginBottom: 16 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  subLabel: { fontSize: 12, color: '#555', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 6, marginBottom: 12 },
  button: { backgroundColor: '#21897E', padding: 12, borderRadius: 6, alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  terms: { fontSize: 10, color: '#777', textAlign: 'center' },
});
