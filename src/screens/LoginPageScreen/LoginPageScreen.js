import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {onAuthStateChanged, signInWithPhoneNumber, getAuth} from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore";

export default function LoginPageScreen({navigation}) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');

    async function handleAuthStateChanged(user) {
        if (user) {
            try {
                const res = await firestore()
                    .collection('users')
                    .doc(user.uid)
                    .get();

                if (res.exists) {
                    console.log("response");
                    console.log(res.data());
                } else {
                    console.log("Document doesn't exist");
                }
            } catch (err) {
                console.log('error');
                console.log(err);
            }
        }
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
        return subscriber;
    })

    async function handleSignInWithPhoneNumber(phoneNumber) {
        const confirmation = await signInWithPhoneNumber(getAuth(), phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log(error)
            console.log('Invalid code.');
        }
    }

    if (!confirm) {
        return (<Button
            title="Phone Number Sign In"
            onPress={() => handleSignInWithPhoneNumber('+918115570767')}
        />);
    }

    return (<>
        <TextInput value={code} onChangeText={text => setCode(text)}/>
        <Button title="Confirm Code" onPress={() => confirmCode()}/>
    </>);
}