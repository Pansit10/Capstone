import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, ScrollView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BottomNavbar from '../components/BottomNavbar';

const Wedding = () => {
  const navigation = useNavigation();

  // Navigate to the Appointment Booking Screen
  const handleAppointmentNavigation = () => {
    navigation.navigate('AppointmentBooking');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Navigation Header with Back Button */}
      <View style={styles.navigationHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#6A5D43" />
        </TouchableOpacity>
        <Text style={styles.navigationTitle}>Wedding</Text>
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require('../image/image4.png')} style={styles.image} />

        <Text style={styles.requirementsTitle}>Requirements for Bride and Groom</Text>
        
        {/* Seminar Pre-Cana Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Seminar Pre-Cana</Text>
          <Text style={styles.description}>
            If you don't have a Pre-Cana Seminar, you can schedule an appointment.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pre-Cana Appointment</Text>
          </TouchableOpacity>
        </View>

        {/* Required Documents Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Required Documents</Text>
          <View style={styles.requirementsList}>
            <Text style={styles.requirementItem}>• Baptismal Certificate</Text>
            <Text style={styles.requirementItem}>• Birth Certificate</Text>
            <Text style={styles.requirementItem}>• Confirmation Certification</Text>
            <Text style={styles.requirementItem}>• Marriage Bond</Text>
            <Text style={styles.requirementItem}>• Seminar Pre-Cana</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.appointmentButton} onPress={handleAppointmentNavigation}>
          <Text style={styles.appointmentButtonText}>Make an Appointment</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navbar */}
      <BottomNavbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    marginRight: 10,
  },
  navigationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6A5D43',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  requirementsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    backgroundColor: '#FAF2E7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A5D43',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#C69C6D',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  requirementsList: {
    paddingHorizontal: 10,
  },
  requirementItem: {
    fontSize: 16,
    color: '#333',
    lineHeight: 28,
    marginBottom: 10,
  },
  appointmentButton: {
    backgroundColor: '#C69C6D',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 50,
  },
  appointmentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Wedding;
