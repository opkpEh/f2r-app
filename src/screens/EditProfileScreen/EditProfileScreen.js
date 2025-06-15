import React from "react"
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native"
import AppBar from "../../components/SimpleAppBar/SimpleAppBar"
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from "./components/CustomTextInput";


export default function EditProfileScreen({navigation}) {
    const [firstName, setFirstName]= React.useState("");
    const [lastName, setLastName]= React.useState("");
    const [email, setEmail]= React.useState("");
    const [phoneNumber, setPhoneNumber]= React.useState("");
    
    const handleSave= () => {
        
    }

    const handleDelete= () => {

    }

    return ( <>
    <SafeAreaView>
                <AppBar title="Edit Profile" navigation={navigation} />

    </SafeAreaView>

   <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.title}>Add Profile</Text>

            <CustomTextInput
                value={firstName}
                onChangeText={setFirstName}
                placeholder="First Name"
            />

            <CustomTextInput
                value={lastName}
                onChangeText={setLastName}
                placeholder="Last Name"
            />

            <CustomTextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email Address"
            />

            <CustomTextInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Mobile Number"
            />

            <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
                <Text style={styles.deleteText}>Delete Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f9f9f9",
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    deleteBtn: {
        marginTop: 16,
        marginBottom: 8,
    },
    deleteText: {
        color: "red",
        fontSize: 14,
        textAlign: "center",
    },
    saveBtn: {
        backgroundColor: "#4CAF50",
        paddingVertical: 12,
        borderRadius: 8,
    },
    saveText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
});
