import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const appointments = [
  { label: 'Wedding', image: require('../image/image4.png') },
  { label: 'Baptism', image: require('../image/image5.png') },
  { label: 'Prayer Intention', image: require('../image/image6.png') },
  { label: 'Funeral Mass', image: require('../image/image7.png') },
  { label: 'House Blessing', image: require('../image/image8.png') },
  { label: 'Request for Baptismal and Kumpil Certificate', image: require('../image/image9.png') },
  { label: 'First Communion', image: require('../image/image10.png') },
  { label: 'Kumpil', image: require('../image/image11.png') },
  { label: 'Special Mass', image: require('../image/image12.png') },
];

const Appointment = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Appointment'); // Set active tab to "Appointment"

  // Function to handle button click (this can be customized for each appointment)
  const handleAppointmentPress = (appointmentLabel) => {
    console.log(`Selected appointment: ${appointmentLabel}`);
    // You can add navigation or other logic here, for example:
    // navigation.navigate('SpecificScreen', { appointmentType: appointmentLabel });
  };

  const handleNavigate = (screen) => {
    setActiveTab(screen);
    navigation.navigate(screen); // Navigate to the respective screen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('../image/logo.png')} 
          style={styles.logo}
        />
        <View style={styles.icons}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons name="person-circle-outline" size={24} color="black" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.title}>Appointment and Request</Text>
        </View>

        {/* Appointment Items */}
        {appointments.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card} 
            onPress={() => handleAppointmentPress(item.label)} // Make card clickable
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Fixed Navbar Section */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigate('HomePage')}>
          <Ionicons name="home-outline" size={24} color="#666" />
          <Text style={[styles.navText, activeTab === 'HomePage' && styles.activeTab]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigate('Appointment')}>
          <Ionicons name="add-circle-outline" size={24} color="#666" />
          <Text style={[styles.navText, activeTab === 'Appointment' && styles.activeTab]}>Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigate('Calendar')}>
          <Ionicons name="calendar-outline" size={24} color="#666" />
          <Text style={[styles.navText, activeTab === 'Calendar' && styles.activeTab]}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigate('Menu')}>
          <Ionicons name="menu-outline" size={24} color="#666" />
          <Text style={[styles.navText, activeTab === 'Menu' && styles.activeTab]}>Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 100, // Added padding to ensure content is not cut off by navbar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f7f7f7',
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
  headerTitleContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#EBD7BF',
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: '#EBD7BF',
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
  activeTab: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#6A5D43',
    borderBottomWidth: 3,
    borderBottomColor: '#C69C6D',
  },
});

export default Appointment;
