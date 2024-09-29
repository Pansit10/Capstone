import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { useNavigation } from '@react-navigation/native';

const Wedding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image
            source={require('../image/logo.png')}  // Logo path
            style={styles.logo}
          />
          <View style={styles.icons}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Ionicons name="person-circle-outline" size={24} color="black" />
          </View>
        </View>
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require('../image/image4.png')} style={styles.image} />

        <Text style={styles.requirementsTitle}>Requirements for Bride and Groom</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Seminar Pre-Cana</Text>
          <Text style={styles.description}>
            If you don't have a Pre-Cana Seminar, you can schedule an appointment.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pre-Cana Appointment</Text>
          </TouchableOpacity>
        </View>

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

        <TouchableOpacity style={styles.appointmentButton}>
          <Text style={styles.appointmentButtonText}>Make an Appointment</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Fixed Navbar Section */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomePage')}>
          <Ionicons name="home-outline" size={24} color="#666" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Appointment')}>
          <Ionicons name="add-circle-outline" size={24} color="#666" />
          <Text style={styles.navText}>Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Calendar')}>
          <Ionicons name="calendar-outline" size={24} color="#666" />
          <Text style={styles.navText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu-outline" size={24} color="#666" />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#f7f7f7',
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  icons: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
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
    lineHeight: 28, // Increased line height for more spacing
    marginBottom: 10, // Added margin at the bottom of each item
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
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#EBD7BF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});

export default Wedding;
