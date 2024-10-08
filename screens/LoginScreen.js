import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

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
      navigation.navigate('HomePage'); // Navigate to homepage after static login
    }, 2000); // Simulate a delay for login
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.rememberMeContainer}>
          <BouncyCheckbox
            size={25}
            fillColor="#C39269"
            unfillColor="#FFFFFF"
            text="Remember me"
            iconStyle={{ borderColor: "#C39269", borderRadius: 5 }}
            textStyle={styles.rememberMeText}
            isChecked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
          />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 30,
  },
  loginCard: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6A5D43',
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
  rememberMeContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
    width: '100%',
  },
  rememberMeText: {
    fontSize: 16,
    color: '#4A4A4A',
  },
  button: {
    backgroundColor: '#C39269',
    paddingVertical: 15,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialMediaLabel: {
    fontSize: 16,
    marginBottom: 15,
    color: '#6A5D43',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
    marginBottom: 30,
  },
  socialIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
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
    color: '#C39269',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
