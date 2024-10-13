import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState(new Array(4).fill('')); 

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text.length === 1 && index < 3) {
      const nextInput = `input${index + 1}`;
      this[nextInput].focus();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image/logo.png')} 
        style={styles.logo}
      />
      <Text style={styles.header}>Verification Code</Text>
      <Text style={styles.instructions}>We have sent the verification code to your email address</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => { this[`input${index}`] = ref }}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, index)}
            value={digit}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100, 
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  codeInput: {
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#C39269',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default VerificationScreen;
