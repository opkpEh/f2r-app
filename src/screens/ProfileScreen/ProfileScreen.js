import React, { useState } from 'react';
import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../../components/SimpleAppBar/SimpleAppBar';
import ProfileHeader from './components/ProfileHeader';
import ProfileOption from './components/ProfileOption';
import LogoutModal from './components/LogoutModal';

export default function ProfileScreen({ navigation }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      <SafeAreaView>
        <AppBar />
        <ProfileHeader navigation={navigation} />
      </SafeAreaView>

      <ProfileOption
        iconName="cube-outline"
        text="Orders"
        onPress={() => navigation.navigate('OrderScreen')}
      />
      <ProfileOption
        iconName="home"
        text="Addresses"
        onPress={() => navigation.navigate('AddressScreen')}
      />
      <ProfileOption
        iconName="help"
        text="Help & Support"
        onPress={() => navigation.navigate('HelpSupportScreen')}
      />
      <ProfileOption
        iconName="logout"
        text="Logout"
        onPress={() => setShowLogoutModal(true)}
      />
      <ProfileOption
        iconName="square"
        text="About us"
        onPress={() => navigation.navigate('AboutUsScreen')}
      />

      <LogoutModal visible={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
    </>
  );
}
