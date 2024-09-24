import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../image/logo.png')}  
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Church Konek!</Text>
      <Text style={styles.description}>Your one-stop app for managing your church appointments and deepening your faith.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}  
      >
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333', // Assuming a dark gray color; adjust if different
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666', // Assuming a lighter gray; adjust if different
    paddingHorizontal: 30, // Adjust padding as needed for better text alignment
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#C39269', // Specified brown color for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // Adjust the border radius to match the button's curvature
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF', // Assuming white text; adjust if different
    fontWeight: 'bold',
  }
});

export default GetStarted;
