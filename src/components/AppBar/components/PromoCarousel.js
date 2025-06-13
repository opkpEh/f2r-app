import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

export default function PromoCarousel() {
    const promoTexts = [
        "🔥 Hurry up and buy now!",
        "🚚 Get delivered in 5-4 days!",
    ];

    return (
        <Carousel
            width={width}
            data={promoTexts}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Text
                        style={styles.promoText}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {item}
                    </Text>
                </View>
            )}
            autoPlay
            autoPlayInterval={2500}
            loop
        />
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
    },
    promoText: {
        color: '#fff',           // 👈 white for visibility
        fontSize: 12,            // 👈 smaller to fit with app bar
        fontWeight: '500',
    },
});