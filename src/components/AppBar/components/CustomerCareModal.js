import React from 'react';
import {Modal, Text, Button, StyleSheet, Pressable} from 'react-native';

export default function CustomerCareModal({visible, onClose}) {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <Pressable onPress={onClose}
                       style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end'}}
            >
                <Pressable style={styles.modalContainer} onPress={() => {
                }}>
                    <Text style={{fontSize: 18, marginBottom: 12}}>Customer Care</Text>
                    <Text style={{fontSize: 18, marginBottom: 12}}>Talk to us</Text>
                    <Text style={{fontSize: 18, marginBottom: 12}}>Chat with us</Text>
                    <Text style={{fontSize: 18, marginBottom: 12}}>Request a call back</Text>
                    <Button title="Close" onPress={onClose}/>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        height: 300,
        backgroundColor: 'white',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        padding: 16,
    },
});