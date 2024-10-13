import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For chevron icon
import SubmitButton from '../components/SubmitButton'; // Import SubmitButton component

const ChurchDonation = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [donorName, setDonorName] = useState('');

  const handleDonate = () => {
    Alert.alert('Thank You', 'Your donation has been received.');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Donate to Church</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Donation Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support the Church</Text>
          <Text style={styles.sectionDescription}>
            Your generous donations help sustain our church and its mission. 
            Please provide your details below and the amount you'd like to donate.
          </Text>
        </View>

        {/* Donation Form Section */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>Donor Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={donorName}
            onChangeText={setDonorName}
          />

          <Text style={styles.fieldLabel}>Donation Amount</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter amount (e.g., 100)"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <SubmitButton label="Donate" onPress={handleDonate} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  navTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginBottom: 15,
  },
  buttonContainer: {
    padding: 20,
  },
});

export default ChurchDonation;
