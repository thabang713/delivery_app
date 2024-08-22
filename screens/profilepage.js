import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Authentication } from '../App';

export default function Profile() {
  const { user, address, card, isDarkTheme, setIsDarkTheme } = useContext(Authentication);

  const toggleSwitch = () => setIsDarkTheme(previousState => !previousState);

  return (
    <View style={isDarkTheme ? styles.darkContainer : styles.container}>
      <View style={isDarkTheme ? styles.darkCard : styles.card}>
        <Text style={isDarkTheme ? styles.darkCardTitle : styles.cardTitle}>User Info</Text>
        <Text style={isDarkTheme ? styles.darkCardText : styles.cardText}>Name: {user.name}</Text>
        <Text style={isDarkTheme ? styles.darkCardText : styles.cardText}>Email: {user.email}</Text>
        <Text style={isDarkTheme ? styles.darkCardText : styles.cardText}>Phone: {user.phone}</Text>
      </View>

      <View style={isDarkTheme ? styles.darkCard : styles.card}>
        <Text style={isDarkTheme ? styles.darkCardTitle : styles.cardTitle}>Address Details</Text>
        <Text style={isDarkTheme ? styles.darkCardText : styles.cardText}>Street: {address.street}</Text>
        <Text style={isDarkTheme ? styles.darkCardText : styles.cardText}>City: {address.city}</Text>
        <Text style={isDarkTheme ? styles.darkCardText : styles.cardText}>State: {address.state}</Text>
        <Text style={isDarkTheme ? styles.darkCardText : styles.cardText}>ZIP: {address.zip}</Text>
      </View>

      <View style={isDarkTheme ? styles.darkCard : styles.card}>
        <Text style={isDarkTheme ? styles.darkCardTitle : styles.cardTitle}>Card Details</Text>
        <Text style={isDarkTheme ? styles.darkCardText : styles.cardText}>Card Number: {card.cardNumber}</Text>
        <Text style={isDarkTheme ? styles.darkCardText : styles.cardText}>Expiration: {card.exp}</Text>
        <Text style={isDarkTheme ? styles.darkCardText : styles.cardText}>CVV: {card.cvv}</Text>
      </View>

      {/* Card layout for the toggle switch */}
      <View style={isDarkTheme ? styles.darkCard : styles.card}>
        <View style={styles.toggleContainer}>
          <Text style={isDarkTheme ? styles.darkToggleText : styles.toggleText}>
            Dark Theme
          </Text>
          <Switch
            value={isDarkTheme}
            onValueChange={toggleSwitch}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
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
  darkContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222', 
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 2,
  },
  darkCard: {
    backgroundColor: '#333', 
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', 
  },
  darkCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  cardText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
  },
  darkCardText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#fff',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  toggleText: {
    fontSize: 16,
    color: '#333',
  },
  darkToggleText: {
    fontSize: 16,
    color: '#fff',
  },
});
