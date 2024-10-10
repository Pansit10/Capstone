// screens/GetStarted1.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import GetStartedHeader from '../components/GetStartedHeader';

const GetStarted1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GetStartedHeader />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Church Konek!</Text>
        <Text style={styles.description}>
          Connect with your parish community, book appointments, and access church services easily.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('GetStarted2')}
        >
          <Text style={styles.buttonText}>Next</Text>
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
});

export default GetStarted1;
