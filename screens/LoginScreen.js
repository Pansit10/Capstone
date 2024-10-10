import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import GetStartedHeader from '../components/GetStartedHeader';
import { Ionicons } from '@expo/vector-icons'; 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Static function to handle user login
  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Login successful');
      navigation.navigate('HomePage'); 
    }, 2000); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <GetStartedHeader />
      <View style={styles.loginCard}>
        <Text style={styles.headerText}>LOG IN</Text>
        <Text style={styles.subHeaderText}>Sign in to your account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword} 
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#4A4A4A" />
          </TouchableOpacity>
        </View>

        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={() => alert('Forgot Password functionality to be implemented')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading} // Disable button when loading
        >
          <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Log In'}</Text>
        </TouchableOpacity>

        <Text style={styles.socialMediaLabel}>or sign in with</Text>
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity>
            <Image source={require('../image/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../image/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
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
    paddingVertical: 30,
    marginHorizontal: 25,
  },
  loginCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#562c15',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#6A5D43',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  forgotPasswordContainer: {
    marginBottom: 20,
    alignItems: 'flex-end', 
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#562c15',
    textDecorationLine: 'underline',
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
  socialMediaLabel: {
    fontSize: 16,
    marginTop: 50,
    marginBottom: 15,
    color: '#6A5D43',
    textAlign: 'center',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    marginBottom: 30,
  },
  socialIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginHorizontal: 15, 
  },
  registerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#4A4A4A',
  },
  registerLink: {
    color: '#562c15',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
