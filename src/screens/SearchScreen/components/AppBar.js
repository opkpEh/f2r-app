import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function SearchAppBar({ navigation, title = 'Search' }) {
    const [inputValue, setInputValue] = React.useState('');

    return (
        <>
            <StatusBar backgroundColor="#808080" barStyle="light-content" />
            <SafeAreaView edges={['top']} style={{ backgroundColor: '#808080' }}>
                <View style={styles.appBar}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" color="#ffff"></Icon>
                    </TouchableOpacity>
                    <TextInput
                        value={inputValue}
                        onChangeText={setInputValue}
                        placeholder="Search"
                        placeholderTextColor="#ccc"
                        style={styles.input}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>

                <View style={styles.buttonBar}>
                    {/* add icons to the buttons just like in new me*/}
                    <TouchableOpacity onPress={() => {navigation.navigate("CategoriesScreen")}}><Text style={styles.buttonText}>Categories</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.buttonText}>Cat 2</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.buttonText}>Cat 3</Text></TouchableOpacity>
                </View>
            </SafeAreaView>
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