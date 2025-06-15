import React from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileAppBar({title = 'Dashboard' }) {
    return (
        <>
            <StatusBar backgroundColor="#808080" barStyle="light-content" />
                <View style={styles.appBar}>
                    <Text style={styles.title}>{title}</Text>
                </View>
        </>
    );
}

const styles = StyleSheet.create({
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#808080',
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        marginRight: 8,
    },
    input: {
        flex: 1,
        backgroundColor: '#666',
        color: '#fff',
        paddingHorizontal: 8,
        borderRadius: 4,
        height: 36,
        marginRight: 8,
    },
    back: {
        color: '#fff',
        fontSize: 14,
    },
    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#707070',
        paddingVertical: 8,
    },
    buttonText: {
        color: '#fff',
    },
});