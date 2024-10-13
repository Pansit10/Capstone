import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SubmitButton from '../screens/components/SubmitButton';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert('Validation Error: Please enter both email and password.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('HomePage'); // Navigate directly to HomePage
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Welcome Back</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.headerText}>Sign in to your account</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input with Eye Icon */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setShowPassword((prev) => !prev)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#4A4A4A"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity
          onPress={() => alert('Forgot Password functionality to be implemented')}
          style={styles.forgotPasswordContainer}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <SubmitButton
          label={loading ? 'Logging in...' : 'Sign In'}
          onPress={handleLogin}
        />

        {/* Social Media Login */}
        <Text style={styles.orText}>or sign in with</Text>
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/image/facebook.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/image/google.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
        </View>

        {/* Register Link */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={styles.registerContainer}
        >
          <Text style={styles.registerText}>
            Don't have an account? <Text style={styles.registerLink}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  navTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    marginTop: 85,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    padding: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginVertical: 5,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#333',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  orText: {
    fontSize: 14,
    color: '#6A5D43',
    textAlign: 'center',
    marginVertical: 15,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    padding: 15,
    borderRadius: 15,
    width: '48%',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#333',
  },
  registerContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#333',
  },
  registerLink: {
    color: '#6A5D43',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
