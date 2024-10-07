import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, ScrollView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { useNavigation } from '@react-navigation/native';
import BottomNavbar from '../components/BottomNavbar';
import AppointmentRequirements from '../components/AppointmentRequirements';

const Baptism = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Navigation Header with Back Button */}
      <View style={styles.navigationHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#6A5D43" />
        </TouchableOpacity>
        <Text style={styles.navigationTitle}>Baptism</Text>
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require('../image/image5.png')} style={styles.image} />

        <Text style={styles.requirementsTitle}>Requirements for Baptism</Text>

        <AppointmentRequirements />

        <TouchableOpacity style={styles.appointmentButton}>
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
    marginTop: 20,
  },
  requirementsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
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

export default Baptism;
