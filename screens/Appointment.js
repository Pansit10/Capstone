import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import BottomNavbar from '../components/BottomNavbar';
import Header from '../components/Header';

const appointments = [
  { label: 'Wedding', image: require('../image/image4.png'), screen: 'Wedding' },
  { label: 'Baptism', image: require('../image/image5.png'), screen: 'Baptism' },
  { label: 'Prayer Intention', image: require('../image/image6.png'), screen: 'PrayerIntention' }, 
  { label: 'Funeral Mass', image: require('../image/image7.png'), screen: 'FuneralMass' },
  { label: 'House Blessing', image: require('../image/image8.png'), screen: 'HouseBlessing' },
  { label: 'Request for Baptismal and Kumpil Certificate', image: require('../image/image9.png'), screen: 'RequestCertificate' },
  { label: 'First Communion', image: require('../image/image10.png'), screen: 'FirstCommunion' },
  { label: 'Kumpil', image: require('../image/image11.png'), screen: 'Kumpil' },
  { label: 'Special Mass', image: require('../image/image12.png'), screen: 'SpecialMass' },
];

const Appointment = () => {
  const navigation = useNavigation();
  const route = useRoute();  // Get the current route
  const [activeTab, setActiveTab] = useState(route.name); // Set active tab based on current route

  useEffect(() => {
    setActiveTab(route.name); // Update activeTab when the route changes
  }, [route.name]);

  const handleNavigate = (screen) => {
    setActiveTab(screen); // Update active tab state
    navigation.navigate(screen); // Navigate to the respective screen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <Header/>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.title}>Appointment and Request</Text>
        </View>

        {/* Appointment Items */}
        {appointments.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card} 
            onPress={() => handleNavigate(item.screen)} // Navigate to respective page
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
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
  scrollContainer: {
    paddingBottom: 80,
  },
  headerTitleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
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
