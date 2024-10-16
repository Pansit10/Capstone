import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import BottomNavbar from '../../components/BottomNavbar';

const services = [
  { label: 'Wedding', icon: 'heart-outline', screen: 'Wedding' },
  { label: 'Baptism', icon: 'water-outline', screen: 'Baptism' },
  { label: 'Funeral Mass', icon: 'flower-outline', screen: 'FuneralMass' },
  { label: 'House Blessing', icon: 'home-outline', screen: 'HouseBlessing' },
  { label: 'First Communion', icon: 'book-outline', screen: 'FirstCommunion' },
  { label: 'Kumpil', icon: 'hand-left-outline', screen: 'Kumpil' },
  { label: 'Special Mass', icon: 'musical-note-outline', screen: 'SpecialMass' },
  { label: 'Prayer Intention', icon: 'chatbox-ellipses-outline', screen: 'PrayerIntention' },
  { label: 'Church Donation', icon: 'cash-outline', screen: 'ChurchDonation' },
];


const mockAppointments = [
  { date: '2024-10-15', title: 'Wedding Appointment', status: 'Upcoming' },
  { date: '2024-09-20', title: 'Funeral Mass', status: 'Past' },
  { date: '2024-08-30', title: 'House Blessing', status: 'Cancelled' },
];

const Appointment = () => {
  const navigation = useNavigation();
  const [appointments, setAppointments] = useState(mockAppointments);
  const [activeTab, setActiveTab] = useState('Upcoming');

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  const handleCancelAppointment = (index) => {
    Alert.alert('Cancel Appointment', 'Are you sure you want to cancel?', [
      { text: 'No' },
      { text: 'Yes', onPress: () => cancelAppointment(index) },
    ]);
  };

  const cancelAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };

  const handleNotificationToggle = (appointment) => {
    Alert.alert('Notification', `Notifications turned on for ${appointment.title}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Title Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Book an Appointment</Text>
          <Text style={styles.description}>
            Select a service to schedule or view your upcoming and past appointments.
          </Text>
        </View>

        {/* Services Grid */}
        <View style={styles.servicesGrid}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={styles.serviceTile}
              onPress={() => handleNavigate(service.label)}
            >
              <Ionicons name={service.icon} size={34} color="#333" />
              <Text style={styles.serviceLabel}>{service.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Appointment Details Section */}
        <View style={styles.appointmentsSection}>
          <View style={styles.tabs}>
            {['Upcoming', 'Past', 'Cancelled'].map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={[
                  styles.tab,
                  activeTab === tab && styles.activeTab,
                ]}
              >
                <Text style={styles.tabText}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {appointments
            .filter((appt) => appt.status === activeTab)
            .map((appointment, index) => (
              <View key={index} style={styles.appointmentCard}>
                <View>
                  <Text style={styles.appointmentTitle}>{appointment.title}</Text>
                  <Text style={styles.appointmentDate}>{appointment.date}</Text>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={() => handleNotificationToggle(appointment)}>
                    <Ionicons name="notifications-outline" size={22} color="#333" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleCancelAppointment(index)}>
                    <MaterialCommunityIcons name="trash-can-outline" size={22} color="#333" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>

      <BottomNavbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollContainer: {
    padding: 15,
    paddingBottom: 100,
  },
  headerContainer: {
    paddingTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#434343',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: '#545454',
    marginTop: 5,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceTile: {
    width: '30%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
  },
  serviceLabel: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 5,
  },
  appointmentsSection: {
    marginTop: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    backgroundColor: '#f7f7f7',
    paddingVertical: 10,
    borderRadius: 20,
  },
  tab: {
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  activeTab: {
    backgroundColor: '#D3F8DF',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  appointmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  appointmentDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default Appointment;
