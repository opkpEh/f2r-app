import React from "react"
import {View, Text, StyleSheet, SafeAreaView} from "react-native"
import AppBar from "./components/AppBar"

export default function SearchScreen({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <AppBar title="Search" navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.text}>Search Screen</Text>
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
