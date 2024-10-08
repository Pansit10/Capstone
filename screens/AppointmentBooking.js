import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars'; // For calendar functionality
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigation = useNavigation();

  const timeSlots = ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM']; // Example time slots

  // Proceed to the upload documents screen
  const handleProceed = () => {
    if (selectedDate && selectedTime) {
      navigation.navigate('UploadDocuments', { selectedDate, selectedTime });
    } else {
      alert('Please select a date and time.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Navigation Header with Back Button */}
      <View style={styles.navigationHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.navigationTitle}>Wedding Appointment</Text>
      </View>

      <Text style={styles.title}>Choose Appointment Date</Text>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#C69C6D' },
        }}
      />

      {selectedDate && (
        <View style={styles.timeSlotContainer}>
          <Text style={styles.subTitle}>Available Time Slots</Text>
          <View style={styles.timeSlots}>
            {timeSlots.map((slot, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.timeSlotButton,
                  selectedTime === slot && { backgroundColor: '#C69C6D' },
                ]}
                onPress={() => setSelectedTime(slot)}
              >
                <Text style={styles.timeSlotText}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigationHeader: {
    backgroundColor: '#6A5D43',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
  },
  navigationTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6A5D43',
    marginTop: 20,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A5D43',
    marginVertical: 10,
  },
  timeSlotContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  timeSlots: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  timeSlotButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FAF2E7',
  },
  timeSlotText: {
    fontSize: 16,
    color: '#333',
  },
  proceedButton: {
    marginTop: 30,
    paddingVertical: 15,
    marginHorizontal: 20,
    backgroundColor: '#C69C6D',
    borderRadius: 5,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppointmentBooking;
