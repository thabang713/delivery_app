import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Authentication } from '../App';

export default function Profile() {
  const {user,address,card} = useContext(Authentication);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>User Info</Text>
        <Text style={styles.cardText}>Name: {user.name}</Text>
        <Text style={styles.cardText}>Email: {user.email}</Text>
        <Text style={styles.cardText}>Phone: {user.phone}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Address Details</Text>
        <Text style={styles.cardText}>Street: {address.street}</Text>
        <Text style={styles.cardText}>City: {address.city}</Text>
        <Text style={styles.cardText}>State: {address.state}</Text>
        <Text style={styles.cardText}>ZIP: {address.zip}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Card Details</Text>
        <Text style={styles.cardText}>Card Number: {card.cardNumber}</Text>
        <Text style={styles.cardText}>Expiration: {card.exp}</Text>
        <Text style={styles.cardText}>CVV: {card.cvv}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginVertical: 5,
  },
});
