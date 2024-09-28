import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

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

        <Text style={styles.welcomeText}>
          Welcome to Blessed Virgin Mary, Queen of The World Parish
        </Text>

        <Image
          source={require('../image/image1.png')} 
          style={styles.aboutImage}
        />
        <View style={styles.aboutContainer}>
          <Text style={styles.sectionHeader}>About</Text>
          <Text style={styles.aboutText}>
            Established in 1971, the parish was carved from the parish of St. John the Baptist.
            The pioneering parish priest was Fr. Armando Perez. He built the church and rectory.
          </Text>
        </View>

        <Image
          source={require('../image/image2.png')} 
          style={styles.massImage}
        />
        <View style={styles.massScheduleContainer}>
          <Text style={styles.massScheduleHeader}>Mass Schedule</Text>
          <View style={styles.scheduleContainer}>
            <Text style={styles.scheduleText}>Monday - 6:00 AM</Text>
            <Text style={styles.scheduleText}>Tuesday - 5:00 AM</Text>
            <Text style={styles.scheduleText}>Wednesday - 6:00 AM</Text>
            <Text style={styles.scheduleText}>Thursday - 5:00 AM</Text>
            <Text style={styles.scheduleText}>Friday - 6:00 AM</Text>
            <Text style={styles.scheduleText}>Saturday - 5:00 AM</Text>
            <Text style={styles.scheduleText}>Sunday - 6:00 AM</Text>
          </View>
        </View>

        <Image
          source={require('../image/image3.png')} 
          style={styles.eventImage}
        />
        <View style={styles.eventContainer}>
          <Text style={styles.eventHeader}>Upcoming Event</Text>
          <Text style={styles.eventText}>March 13, 2024 - Kumpisalang Bayan at 5:00 PM</Text>

          <View style={styles.line} />

          <Text style={styles.eventText}>
            Ash Wednesday Schedule of Masses February 14, 2024 6:00 AM - 5:00 PM
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.footerSection}>
            <FontAwesome name="facebook-square" size={24} color="black" />
            <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com')}>BVM, Queen of the World Parish</Text>
          </View>
          <View style={styles.footerSection}>
            <Ionicons name="call" size={20} color="black" />
            <Text style={styles.footerText}>(042) 719 1187</Text>
          </View>

          <View style={styles.footerSection}>
            <Ionicons name="location-outline" size={20} color="black" />
            <Text style={styles.footerText}>Villa Consolacion Subdivision, Lusacan, Tiaong, Quezon.</Text>
          </View>
        </View>
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
  welcomeText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  aboutContainer: {
    padding: 20,
    backgroundColor: '#EBD7BF',
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    textAlign: 'center',
  },
  massImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  massScheduleContainer: {
    padding: 20,
    backgroundColor: '#EBD7BF',
    borderRadius: 10,
    marginBottom: 20,
  },
  massScheduleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  scheduleContainer: {
    alignItems: 'center',
  },
  scheduleText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
  },
  eventImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  eventContainer: {
    padding: 20,
    backgroundColor: '#EBD7BF',
    borderRadius: 10,
    marginBottom: 20,
  },
  eventHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  eventText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    textAlign: 'center',
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  footerContainer: {
    backgroundColor: '#EBD7BF',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 15, // Add padding to space text from edges
  },
  footerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // More space between footer sections
  },
  footerText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
    flex: 1, // Allow text to wrap
    flexWrap: 'wrap', // Ensures text wraps properly
  },
  linkText: {
    fontSize: 16,
    color: 'blue',
    marginLeft: 10,
    textDecorationLine: 'underline',
    flex: 1, // Allow link to wrap
    flexWrap: 'wrap', // Wraps link text
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
