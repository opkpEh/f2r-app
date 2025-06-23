import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

import AppBar from '../../components/SimpleAppBar/SimpleAppBar';
import ProfileHeader from './components/ProfileHeader';
import ProfileOption from './components/ProfileOption';
import LogoutModal from './components/LogoutModal';

export default function ProfileScreen({ navigation }) {
    const [user, setUser] = useState(auth().currentUser);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((u) => {
            if (u) setUser(u);
            else navigation.replace('PromptLoginScreen');
        });
        return unsubscribe;
    }, []);

    const handleLogout = async () => {
        try {
            await auth().signOut();
            navigation.reset({
                index: 0,
                routes: [{ name: 'MainTabs' }],
            });
        } catch (error) {
            console.error('Logout error:', error);
            Alert.alert('Error', 'Failed to logout.');
        }
    };

    return (
        <>
            <SafeAreaView>
                <AppBar />
                <ProfileHeader navigation={navigation} user={user} />
            </SafeAreaView>

            <ProfileOption iconName="cube-outline" text="Orders" onPress={() => navigation.navigate('OrderScreen')} />
            <ProfileOption iconName="home" text="Addresses" onPress={() => navigation.navigate('AddressScreen')} />
            <ProfileOption iconName="help" text="Help & Support" onPress={() => navigation.navigate('HelpSupportScreen')} />
            <ProfileOption iconName="logout" text="Logout" onPress={() => setShowLogoutModal(true)} />
            <ProfileOption iconName="square" text="About us" onPress={() => navigation.navigate('AboutUsScreen')} />

            <LogoutModal
                visible={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                onLogout={handleLogout}
            />
        </>
    );
}