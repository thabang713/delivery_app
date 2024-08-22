import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import Menu from './menupage';
import Cart from './cartpage';
import Profile from './profilepage';



const Tabpage = createBottomTabNavigator();

export default function Tab() {
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
        })}
      >
        <Tabpage.Screen name="Menu" component={Menu} />
        <Tabpage.Screen name="Cart" component={Cart} />
        <Tabpage.Screen name="Profile" component={Profile} />
      </Tabpage.Navigator>
  );
}



