import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AppBar from '../../components/SimpleAppBar/SimpleAppBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function LoginDetailsScreen({ navigation }) {
    const [fullName, setFullName] = useState('');

    const handleSaveProfile = async () => {
        const user = auth().currentUser;

        if (!fullName.trim()) {
            Alert.alert('Error', 'Please fill in the name');
            return;
        }

        try {
            await firestore().collection('users').doc(user.uid).set({
                name: fullName,
                phone: user.phoneNumber,
                createdAt: firestore.FieldValue.serverTimestamp(),
            });

            Alert.alert('Success', 'Profile saved');
            navigation.navigate("MainTabs")
        } catch (error) {
            console.error('Error saving profile:', error);
            Alert.alert('Error', 'Failed to save profile');
        }
    };


    return (
        <>
            <SafeAreaView>
                <AppBar title="Account Setup" />
            </SafeAreaView>

            <View style={styles.container}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Enter your full name"
                    style={styles.input}
                />

                <TouchableOpacity onPress={handleSaveProfile} style={styles.button}>
                    <Text style={styles.buttonText}>Save & Continue</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: { padding: 16, flex: 1 },
    label: { marginTop: 12, marginBottom: 4, fontSize: 14, fontWeight: 'bold' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 6,
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#21897E',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 16,
    },
    buttonText: { color: '#fff', fontWeight: 'bold' },
});
