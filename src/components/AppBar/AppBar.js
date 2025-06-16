import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import IconButton from "./components/IconButton";
import CustomerCareModal from "./components/CustomerCareModal";
import PromoCarousel from "./components/PromoCarousel";

export default function AppBar({ title = "f2r app bar", navigation }) {
    const [ccModalVisible, setCCModalVisible] = React.useState(false);
    return (
        <View style={styles.appBar}>
            <Text style={styles.appBarTitle}>{title}</Text>
            <View style={styles.promoContainer}>
                <PromoCarousel />
            </View>
            <View style={styles.iconContainer}>
                <IconButton
                    iconName="search"
                    onPress={() => navigation.navigate('SearchScreen')}
                    size={24}
                    color="#fff"
                />
                <IconButton
                    iconName="trolley"
                    onPress={() => navigation.navigate('CheckoutCartScreen')}
                    size={24}
                    color="#fff"
                />
                <IconButton
                    iconName="person"
                    onPress={() => navigation.navigate('ProfileScreen')}
                    size={24}
                    color="#fff"
                />
            </View>
            <CustomerCareModal visible={ccModalVisible} onClose={() => setCCModalVisible(false)} animationType="none" />

        </View>

    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        backgroundColor: '#808080',
    },
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
        marginRight: 8,
    },
    promoContainer: {
        flexShrink: 1,
        maxWidth: '50%',
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
});
