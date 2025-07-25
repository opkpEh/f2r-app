import React from "react"
import {View, Text, StyleSheet} from "react-native"
import AppBar from "../../components/SimpleAppBar/SimpleAppBar"
import { SafeAreaView } from 'react-native-safe-area-context';


export default function OrderScreen({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <AppBar title="Your Orders" navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.text}>Orders Screen</Text>
                {/* orders should have a help option too, opening a chat bot for that order*/}
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
