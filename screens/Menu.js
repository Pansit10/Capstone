import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { useNavigation, useRoute } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState(route.name);

  const handleNavigate = (screen) => {
    setActiveTab(screen);
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.content}>
        <Image source={require('../image/profile.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>Francis Gabriel Flancia</Text>
        <Text style={styles.profileEmail}>flanciafrancis03@gmail.com</Text>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="chatbubble-outline" size={24} color="#666" />
          <Text style={styles.menuText}>Message Admin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-outline" size={24} color="#666" />
          <Text style={styles.menuText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="document-outline" size={24} color="#666" />
          <Text style={styles.menuText}>Generate Certificate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signOutButton}>
          <Ionicons name="log-out-outline" size={24} color="#666" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

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
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EBD7BF',
    width: '100%',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#666',
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  signOutText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
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

export default Menu;
