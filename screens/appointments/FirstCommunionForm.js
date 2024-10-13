import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  View, 
  ScrollView, 
  Platform, 
  Alert 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import * as DocumentPicker from 'expo-document-picker';

const FirstCommunionForm = ({ route, navigation }) => {
  const { service } = route.params;
  const [childName, setChildName] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [parentContact, setParentContact] = useState('');
  const [birthCertificate, setBirthCertificate] = useState(null);
  const [baptismalCertificate, setBaptismalCertificate] = useState(null);

  const handleDocumentPick = async (setter) => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setter(result);
    } else {
      Alert.alert('Upload Cancelled');
    }
  };

  const handleSubmit = () => {
    if (!childName || !gradeLevel || !parentContact) {
      Alert.alert('Please fill all required fields.');
      return;
    }
    Alert.alert(`Appointment for ${service} booked successfully!`);
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
          <Text style={styles.label}>Child's Name</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter child's full name" 
            value={childName} 
            onChangeText={setChildName} 
          />

          <Text style={styles.label}>Grade Level</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter child's grade level" 
            value={gradeLevel} 
            onChangeText={setGradeLevel} 
          />

          <Text style={styles.label}>Parent's Contact Number</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter contact number" 
            keyboardType="phone-pad" 
            value={parentContact} 
            onChangeText={setParentContact} 
          />

          <Text style={styles.label}>Upload Birth Certificate</Text>
          <TouchableOpacity 
            style={styles.uploadButton} 
            onPress={() => handleDocumentPick(setBirthCertificate)}
          >
            <Text style={styles.uploadButtonText}>
              {birthCertificate ? birthCertificate.name : 'Choose File'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.label}>Upload Baptismal Certificate</Text>
          <TouchableOpacity 
            style={styles.uploadButton} 
            onPress={() => handleDocumentPick(setBaptismalCertificate)}
          >
            <Text style={styles.uploadButtonText}>
              {baptismalCertificate ? baptismalCertificate.name : 'Choose File'}
            </Text>
          </TouchableOpacity>

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
  uploadButton: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    alignItems: 'center',
  },
  uploadButtonText: {
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

export default FirstCommunionForm;
