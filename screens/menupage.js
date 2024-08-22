import React,{useState,useContext} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Authentication } from '../App';

const food = [
  {
    name: 'Mzansi Brekkie',
    price: 47.90,
    description: 'breakfast',
    img: require('../pics/1.webp'),
  },
  {
    name: 'Early Bird',
    price: 57.00,
    description: 'breakfast',
    img: require('../pics/2.webp'),
  },
  {
    name: 'Steaky Breakfast',
    price: 59.90,
    description: 'breakfast',
    img: require('../pics/3.webp'),
  },
  {
    name: 'Cheese Griller',
    price: 64.90,
    description: 'breakfast',
    img: require('../pics/4.webp'),
  },
  {
    name: 'Hash brekkie',
    price: 66.90,
    description: 'snack',
    img: require('../pics/5.webp'),
  },
  {
    name: 'Mushroom Hash brekkie',
    price: 67.90,
    description: 'Snack',
    img: require('../pics/6.webp'),
  },
  {
    name: 'Cheese and Tomato Omelette',
    price: 74.90,
    description: 'snack',
    img: require('../pics/7.webp'),
  },
  {
    name: 'Mealie Bread',
    price: 71.90,
    description: 'lunch',
    img: require('../pics/8.webp'),
  },
  {
    name: 'Mixed Grill',
    price: 169.90,
    description: 'lunch',
    img: require('../pics/9.webp'),
  },
  {
    name: 'Mega brekkie',
    price: 106.90,
    description: 'lunch',
    img: require('../pics/10.webp'),
  },
];

export default function Menu() {
    const {cart,setCart} = useContext(Authentication);

    const addToCart = (item) => {
        const itemInCart = cart.find(cartItem => cartItem.name === item.name);
    
        if (itemInCart) {
          Alert.alert(`${item.name} has been added to your cart....Go to cart to add quantity`);
        } else {
          setCart((prevCart) => [...prevCart, item]);
          Alert.alert(`${item.name} has been added to your cart!`);
        }
      };
  return (
    <ScrollView style={styles.container}>
      {
        food.map((items, index) => (
          <View key={index} style={styles.card}>
            <Image source={items.img} style={styles.image} />
            <Text style={styles.title}>{items.name}</Text>
            <Text style={styles.title}>{items.description}</Text>
            <Text style={styles.price}>R{items.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={() => addToCart(items)}>
              <Text style={styles.buttonText}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        ))
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#ff6300',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
