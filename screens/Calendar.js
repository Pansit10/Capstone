import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CalendarList } from 'react-native-calendars';
import BottomNavbar from '../components/BottomNavbar';
import Header from '../components/Header';

const Calendar = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Get the current route
  const [activeTab, setActiveTab] = useState(route.name); // Set active tab based on current route
  const [selectedDate, setSelectedDate] = useState(''); // Track selected date
  const [currentDate, setCurrentDate] = useState(''); // Track current date

  // Function to get today's date
  const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Ensure 2 digits for month
    const day = today.getDate().toString().padStart(2, '0'); // Ensure 2 digits for day
    return `${year}-${month}-${day}`; // Format the date as 'YYYY-MM-DD'
  };

  useEffect(() => {
    const today = getToday();
    setCurrentDate(today); // Set the current date when component mounts
  }, []);

  const handleNavigate = (screen) => {
    setActiveTab(screen); // Update active tab state
    navigation.navigate(screen); // Navigate to the respective screen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <Header />

      {/* Content Section (Calendar Scrollable Content) */}
      <View style={styles.calendarContainer}>
        <CalendarList
          // Show a scrollable list of months
          onDayPress={(day) => {
            setSelectedDate(day.dateString); // Set the selected date
          }}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#C69C6D' }, // Mark selected date
            [currentDate]: { marked: true, dotColor: '#00adf5', selected: true, selectedColor: '#f0a500' }, // Highlight today's date
          }}
          pastScrollRange={12} // Show 12 months before the current month
          futureScrollRange={12} // Show 12 months after the current month
          scrollEnabled={true} // Allow scrolling through months
          showScrollIndicator={true} // Show scroll indicator
        />
      </View>

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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  calendarContainer: {
    flex: 1,
    padding: 10,
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

export default Calendar;
