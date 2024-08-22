import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';

const {width} = Dimensions.get("window")

export default function SetupPrompt({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Set up your details by providing your details,address details and lastly bank card details to continue</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('User')}
      >
        <Text style={styles.buttonText}>continue with setup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: width*0.8,
    paddingVertical: 10,
    backgroundColor: '#ff6300', 
    borderRadius: 5,
    alignItems: 'center',
    position: 'absolute', 
    bottom: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

