import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from "../../../components/SimpleAppBar/SimpleAppBar";
import firestore from "@react-native-firebase/firestore";


export default function PromptLoginScreen({navigation}) {
    return (
        <SafeAreaView >
            <AppBar title="Not logged in!" navigation={navigation}/>
            <View>
                <Button onPress={()=> {navigation.navigate("MainTabs")}} title="SKIP"/>
                <Text style={styles.text}>You need to log in to access this page.</Text>
                <Button title="Go to Login" onPress={() => navigation.navigate('LoginPageScreen')}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    text: {
        fontSize: 16,
        marginBottom: 20,
    },
});