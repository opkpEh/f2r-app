import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from "react-native";
import auth from '@react-native-firebase/auth';

export default function LogoutModal({ visible, onClose, navigation }) {
  const handleLogout = async () => {
    try {
      await auth().signOut();
      onClose(); // Close modal
      navigation.replace('LoginPageScreen'); // Redirect to login
    } catch (error) {
      console.error('Logout error:', error);
      Alert.alert('Error', 'Failed to logout.');
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Are you sure?</Text>
          <Text>Do you want to logout?</Text>

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  closeButton: {
    backgroundColor: '#aaa',
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
    width: '100%',
    alignItems: 'center'
  },
  logoutButton: {
    backgroundColor: '#FF6B6B',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
