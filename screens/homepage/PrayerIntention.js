import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For chevron icon
import SubmitButton from '../components/SubmitButton'; // Import the SubmitButton component

const PrayerIntention = ({ navigation }) => {
  const [intention, setIntention] = useState('');
  const [includeDonation, setIncludeDonation] = useState(false); // Track donation switch

  const handleSubmit = () => {
    const message = includeDonation
      ? 'Your prayer intention and donation request have been submitted.'
      : 'Your prayer intention has been submitted.';
    Alert.alert('Thank You', message);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Prayer Intention</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Description Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Submit Your Prayer Intention</Text>
          <Text style={styles.sectionDescription}>
            Let us pray for you. Please share your prayer intention below, and
            if you’d like, include a donation with your submission.
          </Text>
        </View>

        {/* Prayer Intention Input */}
        <View style={styles.section}>
          <Text style={styles.fieldLabel}>Your Prayer Intention</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your prayer intention..."
            value={intention}
            onChangeText={setIntention}
            multiline
          />
        </View>

        {/* Donation Option */}
        <View style={styles.section}>
          <View style={styles.switchRow}>
            <Text style={styles.fieldLabel}>Include a Donation?</Text>
            <Switch
              value={includeDonation}
              onValueChange={setIncludeDonation}
              thumbColor={includeDonation ? '#C69C6D' : '#f4f3f4'}
              trackColor={{ false: '#E0E0E0', true: '#C69C6D' }}
            />
          </View>
          {includeDonation && (
            <Text style={styles.donationNote}>
              Thank you for your generosity! We will follow up with instructions
              on how to complete your donation.
            </Text>
          )}
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <SubmitButton label="Submit Prayer" onPress={handleSubmit} />
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
    minHeight: 100,
    textAlignVertical: 'top',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  donationNote: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    padding: 20,
  },
});

export default PrayerIntention;
