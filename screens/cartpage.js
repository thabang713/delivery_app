import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Authentication } from '../App';

const Cart = () => {
  const { cart, setCart, isDarkTheme } = useContext(Authentication);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart.map(item => ({ ...item, quantity: 1 })));
  }, [cart]);

  const updateQuantity = (index, change) => {
    setCartItems(prevItems => {
      const updatedItems = [...prevItems];
      const newQuantity = updatedItems[index].quantity + change;
      if (newQuantity >= 0) {
        updatedItems[index].quantity = newQuantity;
      }
      return updatedItems;
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    Alert.alert(
      'Checkout',
      'Are you sure you want to check out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            setCart([]);
            setCartItems([]);
            Alert.alert('Success', 'Your cart has been cleared!');
          },
        },
      ],
      { cancelable: false }
    );
  };

  if (cartItems.length === 0) {
    return (
      <View style={isDarkTheme ? styles.darkEmptyContainer : styles.emptyContainer}>
        <Text style={isDarkTheme ? styles.darkEmptyText : styles.emptyText}>Your cart is empty.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={isDarkTheme ? styles.darkContainer : styles.container}>
      {cartItems.map((item, index) => (
        <View key={item.name} style={isDarkTheme ? styles.darkCard : styles.card}>
          <Image source={item.img} style={styles.image} />
          <View style={styles.details}>
            <Text style={isDarkTheme ? styles.darkTitle : styles.title}>{item.name}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => updateQuantity(index, -1)}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => updateQuantity(index, 1)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={isDarkTheme ? styles.darkTotalText : styles.totalText}>Total: R{calculateTotal()}</Text>
        <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#222', 
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  darkCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333', 
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  darkTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', 
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight:"bold"
  },
  quantityText: {
    fontSize: 25,
    color:'#ff6300',
    fontWeight:"bold"
  },
  totalContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  darkTotalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#ff6300',
    borderRadius: 5,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkEmptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222', 
  },
  emptyText: {
    fontSize: 20,
    color: '#666',
  },
  darkEmptyText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Cart;
