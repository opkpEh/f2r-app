import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileHeader({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
        <Image 
            source={{uri: "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="}}
            style={styles.image}
            />
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>Kushagra Pandey</Text>
          <Text style={styles.email}>harshpandeykp20@gmail.com</Text>
          <Text style={styles.phone}>+918115570767</Text>
        </View>
        <TouchableOpacity
        onPress={()=> {navigation.navigate('EditProfileScreen')}}
        >
          <Text  style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.balanceSection}>
        <View>
          <Text style={styles.balanceLabel}>Wallet Balance</Text>
          <Text style={styles.amount}>₹0</Text>
        </View>
        <View>
          <Text style={styles.balanceLabel}>Referral Earnings</Text>
          <Text style={styles.amount}>₹0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#A0E8AF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  imageIcon: {
    fontSize: 24,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 12,
    color: '#555',
  },
  phone: {
    fontSize: 12,
    color: '#555',
  },
  addText: {
    color: '#228B22',
    fontWeight: 'bold',
  },
  balanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceLabel: {
    fontSize: 12,
    color: '#888',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
image: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
},

});
