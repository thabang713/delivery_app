import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { Authentication } from '../App';

export default function User({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const { user, setUser } = useContext(Authentication);

    const handleSubmit = () => {
        if (!name || !email || !phone) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setUser({ ...user, name, email, phone }); 
        navigation.navigate('Address');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Information</Text>

            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Phone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        fontSize: 16,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#ff6300',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
