// BottomNavbar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const BottomNavbar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const activeTab = route.name;

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.navbar}>
      {[
        { name: 'HomePage', label: 'Home', icon: 'home-outline' },
        { name: 'Appointment', label: 'Appointment', icon: 'add-circle-outline' },
        { name: 'Calendar', label: 'Calendar', icon: 'calendar-outline' },
        { name: 'Menu', label: 'Menu', icon: 'menu-outline' },
      ].map((tab) => (
        <TouchableOpacity key={tab.name} style={styles.navItem} onPress={() => handleNavigate(tab.name)}>
          <View style={[styles.navIcon, activeTab === tab.name && styles.activeNavIcon]}>
            <Ionicons name={tab.icon} size={24} color={activeTab === tab.name ? '#fff' : '#666'} />
          </View>
          <Text style={[styles.navText, activeTab === tab.name && styles.activeTab]}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navIcon: {
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    padding: 10,
  },
  activeNavIcon: {
    backgroundColor: '#C69C6D',
  },
  navText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#6A5D43',
  },
});

export default BottomNavbar;
