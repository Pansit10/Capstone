// Certificate.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';

const Certificate = () => {
  const [certificateType, setCertificateType] = useState('');
  const [recipientName, setRecipientName] = useState('');

  const handleRequest = () => {
    Alert.alert('Success', 'Your certificate request has been submitted.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Request Certificate</Text>

        <TextInput
          style={styles.input}
          placeholder="Certificate Type (e.g., Baptism, Marriage)"
          value={certificateType}
          onChangeText={setCertificateType}
        />
        <TextInput
          style={styles.input}
          placeholder="Recipient's Name"
          value={recipientName}
          onChangeText={setRecipientName}
        />

        <Button title="Submit Request" onPress={handleRequest} color="#562c15" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    borderColor: '#333333',
    borderWidth: 1,
  },
});

export default Certificate;
