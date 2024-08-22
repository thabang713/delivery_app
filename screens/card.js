import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { Authentication } from '../App';

export default function Card({ navigation }) {
    const [cardNumber, setCardNumber] = useState('');
    const [exp, setExp] = useState('');
    const [cvv, setCvv] = useState('');

    const { card, setCard } = useContext(Authentication);

    const handleSubmit = () => {
        if (!cardNumber || !exp || !cvv) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setCard({ ...card, cardNumber, exp, cvv }); // Update the card information in context
        navigation.navigate('Tab'); // Navigate to the next screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Credit Card Information</Text>

            <TextInput
                style={styles.input}
                placeholder="Card number (e.g., 1234 4567 5678 7657)"
                value={cardNumber}
                onChangeText={setCardNumber}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="Expire date (e.g., 12/24)"
                value={exp}
                onChangeText={setExp}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="CVV (e.g., 456)"
                value={cvv}
                onChangeText={setCvv}
                keyboardType="numeric"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Finish</Text>
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
