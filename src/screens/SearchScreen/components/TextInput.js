import react from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default function CustomTextInput({value, onChangeText, placeholder= "Enter Text..."}){
    return (
        <TextInput
            style={[styles.input]}
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
        ></TextInput>
    )
}
const styles = StyleSheet.create({
    input: {
        borderColor: '#808080',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        height: 40,
        flex: 1
    },
});