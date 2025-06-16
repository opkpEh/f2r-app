import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PromptLoginPageScreen({navigation}) {
    return (
        <View>
            <Text>want to save wishlist or access your account?</Text>
            <Text>Please login/register first</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginPageScreen')}></TouchableOpacity>
        </View>
    )
}