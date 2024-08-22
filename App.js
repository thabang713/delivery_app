import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import React,{createContext, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

import User from './screens/users';
import Address from './screens/address';
import Card_info from './screens/card';
import Setup from './screens/setup';
import Tab from './screens/tab';


const Stack = createNativeStackNavigator();
export const Authentication = createContext();

export default function App() {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const [address, setAddress] = useState({ street: '', city: '', state: '' ,zip:''});
  const [card, setCard] = useState({ cardNumber: '', exp: '', cvv: '' });
  const [cart, setCart] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <Authentication.Provider value={{user,address,card,setAddress,setCard,setUser,cart,setCart,setIsDarkTheme,isDarkTheme}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Setup">
          <Stack.Screen 
          name="Setup"
          component={Setup} 
          options={{ title: 'Welcome', headerTitleAlign: 'center', }} />

          <Stack.Screen 
          name="User"
          component={User} 
          options={{ title: 'Step 1/3', headerTitleAlign: 'center',  headerBackVisible: false, }} />

          <Stack.Screen
          name="Address" 
          component={Address} 
          options={{ title: 'Step 2/3', headerTitleAlign: 'center', }} />

          <Stack.Screen 
          name="Card" 
          component={Card_info} 
          options={{ title: 'Step 3/3', headerTitleAlign: 'center', }} />

          <Stack.Screen 
          name="Tab"
          component={Tab} 
          options={{ title: 'Food Delivery App',  headerBackVisible: false, }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Authentication.Provider>
  );
}

LogBox.ignoreLogs([
  'Require cycle:'
]);
