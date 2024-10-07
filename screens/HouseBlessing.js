import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, ScrollView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BottomNavbar from '../components/BottomNavbar';

const HouseBlessing = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Navigation Header with Back Button */}
      <View style={styles.navigationHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#6A5D43" />
        </TouchableOpacity>
        <Text style={styles.navigationTitle}>House Blessing</Text>
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require('../image/image8.png')} style={styles.image} />

        <Text style={styles.requirementsTitle}>Requirements for House Blessing</Text>
        
        <View style={styles.section}>
          <View style={styles.requirementsList}>
            <Text style={styles.requirementItem}>• Appointment a schedule</Text>
            <Text style={styles.requirementItem}>• Address</Text>
          </View>
        </View>

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
  },
  requirementsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    backgroundColor: '#FDF3E7',  // Subtle background color for better presentation
    padding: 15, // Adjusted padding for better alignment
    borderRadius: 10,
    marginBottom: 20,
  },
  requirementsList: {
    paddingHorizontal: 10,
  },
  requirementItem: {
    fontSize: 16,
    color: '#333',
    lineHeight: 28, // Increased line height for better readability
    marginBottom: 10, // Space between items
  },
  appointmentButton: {
    backgroundColor: '#C69C6D',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 50, // Ensures it does not overlap with the navbar
  },
  appointmentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HouseBlessing;
