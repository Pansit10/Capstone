import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.signupCard}>
          <Text style={styles.headerText}>SIGN UP</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('VerificationScreen')}
          >
            <Text style={styles.buttonText}>Register</Text>
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
      </ScrollView>
      <TouchableOpacity 
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.loginContainer}
      >
        <Text style={styles.registerText}>Already have an account? <Text style={styles.loginLink}>LOGIN</Text></Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
  signupCard: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
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
    width: '100%',
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
    width: '100%',
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  loginContainer: {
    padding: 20,
  },
  registerText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  loginLink: {
    fontWeight: 'bold',
  }
});

export default SignUp;
