import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import GetStartedHeader from '../components/GetStartedHeader'; // Assuming this is the same header component

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false); // To show a loading state

  // Static function to handle user registration
  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true); // Start loading

    setTimeout(() => {
      alert('Registration successful. Please log in.');
      setLoading(false);
      // Navigate to the login page, passing the registered email
      navigation.navigate('LoginScreen', { registeredEmail: email });
    }, 2000); // Simulate a delay for registration
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <GetStartedHeader />
        <View style={styles.signupCard}>
          <Text style={styles.headerText}>SIGN UP</Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
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

          <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
            <Text style={styles.buttonText}>
              {loading ? 'Registering...' : 'Register'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.socialMediaLabel}>or sign up with</Text>
          <View style={styles.socialMediaContainer}>
            <TouchableOpacity>
              <Image source={require('../image/facebook.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../image/google.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Move the login prompt under the signup card */}
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.loginContainer}>
          <Text style={styles.registerText}>Already have an account? <Text style={styles.loginLink}>LOGIN</Text></Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 30,
    marginHorizontal: 30,
  },
  signupCard: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#562c15',
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
  button: {
    backgroundColor: '#562c15',
    paddingVertical: 15,
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
    marginTop: 20,
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
  loginContainer: {
    padding: 20,
  },
  registerText: {
    fontSize: 16,
    textAlign: 'center',
    
  },
  loginLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default SignUp;
