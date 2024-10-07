import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import BottomNavbar from '../components/BottomNavbar';
import Header from '../components/Header';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(''); // Track selected date
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Track current month as a Date object
  const [appointments, setAppointments] = useState({}); // Hold user appointments
  const [selectedAppointments, setSelectedAppointments] = useState([]); // Appointments for the selected date

  // Function to get today's date
  const getToday = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format the date as 'YYYY-MM-DD'
  };

  // Mock function to fetch user appointments
  const fetchAppointments = () => {
    return {
      '2024-10-10': [{ title: 'Baptism Appointment', time: '10:00 AM' }],
      '2024-10-12': [{ title: 'Wedding Appointment', time: '2:00 PM' }, { title: 'Special Mass', time: '4:00 PM' }],
      '2024-11-15': [{ title: 'House Blessing', time: '11:00 AM' }],
    };
  };

  useEffect(() => {
    const today = getToday();
    setSelectedDate(today); // Set the initial selected date

    // Fetch user appointments and set them
    const userAppointments = fetchAppointments();
    setAppointments(userAppointments);
  }, []);

  // Function to handle when a day is pressed
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString); // Set the selected date
    setSelectedAppointments(appointments[day.dateString] || []); // Update selectedAppointments with the appointments for the selected date
  };

  // Function to change the current month
  const changeMonth = (direction) => {
    let newMonth = new Date(currentMonth);
    if (direction === 'next') {
      newMonth.setMonth(newMonth.getMonth() + 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() - 1);
    }
    setCurrentMonth(newMonth);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <Header />

      {/* Calendar Header with Month Navigation */}
      <View style={styles.monthNavigation}>
        <TouchableOpacity onPress={() => changeMonth('prev')}>
          <Ionicons name="chevron-back-outline" size={30} color="#6A5D43" />
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </Text>
        <TouchableOpacity onPress={() => changeMonth('next')}>
          <Ionicons name="chevron-forward-outline" size={30} color="#6A5D43" />
        </TouchableOpacity>
      </View>

      {/* Calendar Section */}
      <View style={styles.calendarContainer}>
        <Calendar
          key={currentMonth.toString()} // This forces the calendar to re-render when the month changes
          current={currentMonth.toISOString().split('T')[0]} // Set current month
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#C69C6D' },
            [getToday()]: { marked: true, dotColor: '#00adf5', selected: selectedDate === getToday(), selectedColor: '#f0a500' },
            ...Object.keys(appointments).reduce((acc, date) => {
              acc[date] = { marked: true, dotColor: '#C69C6D' };
              return acc;
            }, {}),
          }}
          hideArrows={true} // Hide the default arrows
          hideExtraDays={true} // Hide extra days from other months
          disableMonthChange={true} // Prevent default month change behavior
        />
      </View>

      {/* Appointment Details Section */}
      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>
          Appointments on {selectedDate || 'Select a date'}
        </Text>
        {selectedAppointments.length > 0 ? (
          selectedAppointments.map((appointment, index) => (
            <View key={index} style={styles.appointmentCard}>
              <Text style={styles.appointmentTitle}>{appointment.title}</Text>
              <Text style={styles.appointmentTime}>{appointment.time}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noAppointmentsText}>
            {selectedDate ? 'No appointments on this date' : 'Please select a date'}
          </Text>
        )}
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
  monthNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A5D43',
  },
  calendarContainer: {
    padding: 10,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6A5D43',
  },
  appointmentCard: {
    backgroundColor: '#FDF3E7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  appointmentTime: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  noAppointmentsText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CalendarScreen;
