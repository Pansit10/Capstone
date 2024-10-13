import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SubmitButton from '../screens/components/SubmitButton';

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Registration successful. Please log in.');
      navigation.navigate('LoginScreen', { registeredEmail: email });
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Create Account</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.headerText}>Sign up to get started</Text>

        {/* Full Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your full name"
          />
        </View>

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
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
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

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm your password"
            secureTextEntry
          />
        </View>

        {/* Submit Button */}
        <SubmitButton
          label={loading ? 'Registering...' : 'Register'}
          onPress={handleRegister}
        />

        {/* Social Media Sign Up */}
        <Text style={styles.orText}>or sign up with</Text>
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

        {/* Login Link */}
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.loginContainer}
        >
          <Text style={styles.registerText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
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
    paddingHorizontal: 50, // Margin on the sides
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  navTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10, // Adjust spacing at the top
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
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
  loginContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#333',
  },
  loginLink: {
    color: '#6A5D43',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default SignUp;
