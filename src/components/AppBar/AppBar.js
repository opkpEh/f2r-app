import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import TextInput from "./components/TextInput";
import IconButton from "./components/IconButton";
import CustomerCareModal from "../../screens/homescreen/components/CustomerCaseModal";
import { useNavigation } from '@react-navigation/native';


export default function AppBar({title = "f2r app bar", navigation}) {
    const [inputValue, setInputValue] = React.useState('');
    const [ccModalVisible, setCCModalVisible] = React.useState(false);

    return (
        <>
            <StatusBar backgroundColor="#808080" barStyle="light-content"/>
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>{title}</Text>
                <TextInput
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeholder="Search for products"
                />
                <IconButton
                    iconName="person"
                    onPress={
                        () => setCCModalVisible(true)
                    }
                    size={30}
                    color='#fff'
                />
                <IconButton
                    iconName="trolley"
                    onPress={() => navigation.navigate('CheckoutCartScreen')}
                    size={30}
                    color='#fff'
                />

            </View>
            <CustomerCareModal visible={ccModalVisible} onClose={() => setCCModalVisible(false)}
                               animationType={"none"}/>

        </>
    );
}

const styles = StyleSheet.create({
    appBar: {
        height: 56,
        backgroundColor: '#808080',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        gap: 8,
    },
    appBarTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8, // Optional, for spacing
    },
});
