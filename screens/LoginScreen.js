import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.loginCard}>
        <Text style={styles.headerText}>SIGN IN</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomePage')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.socialMediaContainer}>
          <Image
            source={require('../image/facebook.png')}
            style={styles.socialIcon}
          />
          <Image
            source={require('../image/google.png')}
            style={styles.socialIcon}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account? <Text style={styles.registerLink}>REGISTER</Text></Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 20, 
  },
  loginCard: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // Ensures everything is centered
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%', // Ensures the input fields take the full width of the card
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#C39269',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '100%', // Ensures the button takes the full width of the card
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%', // Ensures the container takes the full width of the card
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  registerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  registerLink: {
    fontWeight: 'bold',
  }
});

export default LoginScreen;
