import React from "react";
import {View, Text, StyleSheet} from "react-native";
import AppBar from "../../components/AppBar/AppBar";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function WhishlistScreen({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <AppBar title="Wishlist" navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.text}>Wishlist Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});