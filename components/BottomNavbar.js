// BottomNavbar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const BottomNavbar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const activeTab = route.name;

  const isAppointmentRelated = [
    'Appointment',
    'Baptism',
    'Wedding',
    'PrayerIntention',
    'FuneralMass',
    'HouseBlessing',
    'RequestCertificate',
    'FirstCommunion',
    'Kumpil',
    'SpecialMass',
  ].includes(activeTab);

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navbar}>
        {[
          { name: 'HomePage', label: 'Home', icon: 'home-outline' },
          { name: 'Appointment', label: 'Appointment', icon: 'add-circle-outline' },
          { name: 'Calendar', label: 'Calendar', icon: 'calendar-outline' },
          { name: 'Profile', label: 'Profile', icon: 'person-outline' },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={styles.navItem}
            onPress={() => handleNavigate(tab.name)}
          >
            <Ionicons
              name={tab.icon}
              size={24}
              color={
                (tab.name === 'Appointment' && isAppointmentRelated) || activeTab === tab.name
                  ? '#6A5D43'
                  : '#666'
              }
            />
            <Text
              style={[
                styles.navText,
                ((tab.name === 'Appointment' && isAppointmentRelated) || activeTab === tab.name) &&
                  styles.activeTab,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f8f8f8',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    elevation: 10,
    zIndex: 100, // Ensure it stays on top
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
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
