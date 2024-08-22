import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { Authentication } from '../App';

export default function Address({ navigation }) {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const { address, setAddress } = useContext(Authentication);

    const handleSubmit = () => {
        if (!street || !city || !state || !zip) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setAddress({ ...address, street, city, state, zip }); // Update the address state
        navigation.navigate('Card');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Address Information</Text>

            <TextInput
                style={styles.input}
                placeholder="Street"
                value={street}
                onChangeText={setStreet}
            />

            <TextInput
                style={styles.input}
                placeholder="City"
                value={city}
                onChangeText={setCity}
            />

            <TextInput
                style={styles.input}
                placeholder="State"
                value={state}
                onChangeText={setState}
            />

            <TextInput
                style={styles.input}
                placeholder="Zip Code"
                keyboardType="phone-pad"
                value={zip}
                onChangeText={setZip}
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
        backgroundColor: '#007BFF',
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
