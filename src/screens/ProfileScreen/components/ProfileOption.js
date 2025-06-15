import react from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfileOption({ iconName, text, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.6}>
            <View style={styles.content}>
                <Icon name={iconName} size={22} color="#333" />
                <Text style={styles.text}>{text}</Text>
            </View>
            <Icon name="chevron-right" size={22} color="#888" />

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: 12,
    fontSize: 15,
    color: '#333'
  }
});