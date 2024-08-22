import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Authentication } from '../App';

import Menu from './menupage';
import Cart from './cartpage';
import Profile from './profilepage';

const Tabpage = createBottomTabNavigator();

export default function Tab() {
  const { isDarkTheme } = useContext(Authentication);

  return (
    <Tabpage.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Menu') {
            iconName = 'home';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: isDarkTheme ? '#333' : '#fff', 
        },
        tabBarActiveTintColor: isDarkTheme ? '#ff6300' : '#ff6300', 
        tabBarInactiveTintColor: isDarkTheme ? '#aaa' : '#666', 
      })}
    >
      <Tabpage.Screen name="Menu" component={Menu} />
      <Tabpage.Screen name="Cart" component={Cart} />
      <Tabpage.Screen name="Profile" component={Profile} />
    </Tabpage.Navigator>
  );
}

