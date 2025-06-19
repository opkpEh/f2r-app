import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from "../../../components/SimpleAppBar/SimpleAppBar";


export default function PromptLoginScreen({ navigation }) {
  return (
  <SafeAreaView style={styles.container}>
                <AppBar title="Not logged in!" navigation={navigation} />

              <View style={styles.content}>
                <Text style={styles.text}>You need to log in to access this page.</Text>
                <Button title="Go to Login" onPress={() => navigation.navigate('LoginPageScreen')} />
              </View>
          </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});
