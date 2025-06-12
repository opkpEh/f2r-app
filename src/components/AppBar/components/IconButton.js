import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function IconButton({
                                       iconName = 'home',
                                       onPress = () => {},
                                       size = 24,
                                       color = '#000',
                                       style
                                   }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Icon name={iconName} size={size} color={color} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 4,
    },
});
