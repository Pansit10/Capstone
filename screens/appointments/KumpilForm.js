import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  View, 
  ScrollView, 
  Alert, 
  Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

const KumpilForm = ({ route, navigation }) => {
  const { service } = route.params;
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [birthCertificate, setBirthCertificate] = useState(null);
  const [baptismalCertificate, setBaptismalCertificate] = useState(null);
  const [confirmationCertificate, setConfirmationCertificate] = useState(null);
  const [marriageContract, setMarriageContract] = useState(null);

  const handleDocumentPick = async (setter) => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setter(result);
    } else {
      Alert.alert('Upload Cancelled');
    }
  };

  const handleSubmit = () => {
    if (!fullName || !contactNumber) {
      Alert.alert('Please fill in all required fields.');
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

          <Text style={styles.label}>Upload Confirmation Certificate</Text>
          <TouchableOpacity 
            style={styles.uploadButton} 
            onPress={() => handleDocumentPick(setConfirmationCertificate)}
          >
            <Text style={styles.uploadButtonText}>
              {confirmationCertificate ? confirmationCertificate.name : 'Choose File'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.label}>Upload Marriage Contract (if married)</Text>
          <TouchableOpacity 
            style={styles.uploadButton} 
            onPress={() => handleDocumentPick(setMarriageContract)}
          >
            <Text style={styles.uploadButtonText}>
              {marriageContract ? marriageContract.name : 'Choose File'}
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

export default KumpilForm;
