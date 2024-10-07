import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import About from '../components/About';
import MassSchedule from '../components/MassSchedule';
import Event from '../components/Event';
import Footer from '../components/Footer';

const HomePage = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Get the current route
  const [activeTab, setActiveTab] = useState('HomePage'); // Default to 'HomePage'

  // Listen to route changes and update the active tab accordingly
  useEffect(() => {
    setActiveTab(route.name); // Update the active tab based on the current route name
  }, [route.name]);

  const handleNavigate = (screen) => {
    navigation.navigate(screen); // Navigate to the desired screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <Text style={styles.welcomeText}>
          Welcome to Blessed Virgin Mary, Queen of The World Parish
        </Text>
        <About />
        <MassSchedule />
        <Event />
        <Footer />
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
    paddingBottom: 80,
    paddingHorizontal: 10,
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 10,
    marginBottom: 10,
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

export default HomePage;