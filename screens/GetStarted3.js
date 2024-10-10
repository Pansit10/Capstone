// screens/GetStarted3.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import GetStartedHeader from '../components/GetStartedHeader';

const GetStarted3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GetStartedHeader />
      <View style={styles.content}>
        <Text style={styles.title}>Join Us Today!</Text>
        <Text style={styles.description}>
          Sign up to access all features, or log in if you already have an account.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#562c15',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#8b9dc3', 
  },
});

export default GetStarted3;
