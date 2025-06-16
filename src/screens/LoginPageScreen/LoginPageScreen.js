import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginPageScreen({ navigation }) {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
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

      <Text style={styles.label}>What's your mobile number?</Text>
      <Text style={styles.subLabel}>A verification code will be sent to this number</Text>

      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter your 10 digit phone number"
        placeholderTextColor="#999"
        keyboardType="numeric"
        style={styles.input}
      />

      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>By logging in you agree to the T&C</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  skip: {
    color: 'blue',
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subLabel: {
    fontSize: 12,
    color: '#555',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#21897E',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  terms: {
    fontSize: 10,
    color: '#777',
    textAlign: 'center',
  },
});
