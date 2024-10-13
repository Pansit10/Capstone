import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  View, 
  ScrollView, 
  Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import DateTimePicker from '@react-native-community/datetimepicker';

const HouseBlessingForm = ({ route, navigation }) => {
  const { service } = route.params;
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Handle Date Selection
  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  // Handle Time Selection
  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) setTime(selectedTime);
  };

  const handleSubmit = () => {
    // Validate input
    if (!fullName || !contactNumber || !address) {
      alert('Please fill in all required fields.');
      return;
    }
    alert(`Appointment for ${service} booked successfully!`);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>{service} Appointment</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter your full name" 
            value={fullName} 
            onChangeText={setFullName} 
          />

          <Text style={styles.label}>Contact Number</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter your contact number" 
            keyboardType="phone-pad" 
            value={contactNumber} 
            onChangeText={setContactNumber} 
          />

          <Text style={styles.label}>Complete Address</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter your address" 
            value={address} 
            onChangeText={setAddress} 
            multiline 
          />

          <Text style={styles.label}>Select Date</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.pickerButton}>
            <Text style={styles.pickerButtonText}>
              {date.toDateString()}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker 
              value={date} 
              mode="date" 
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onDateChange} 
            />
          )}

          <Text style={styles.label}>Select Time</Text>
          <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.pickerButton}>
            <Text style={styles.pickerButtonText}>
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker 
              value={time} 
              mode="time" 
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onTimeChange} 
            />
          )}

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit Appointment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  navTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  pickerButton: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  pickerButtonText: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#C69C6D',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HouseBlessingForm;
