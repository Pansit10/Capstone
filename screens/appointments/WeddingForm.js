import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  View, 
  ScrollView, 
  Alert 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

const WeddingForm = ({ route, navigation }) => {
  const { service, requirements } = route.params; // Fetch service name and requirements from params
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
  });
  const [uploadedFiles, setUploadedFiles] = useState({});

  // Handle text input changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle document upload
  const handleDocumentPick = async (requirement) => {
    const result = await DocumentPicker.getDocumentAsync();
    if (result.type === 'success') {
      setUploadedFiles((prev) => ({ ...prev, [requirement]: result.name }));
    } else {
      Alert.alert('Upload Cancelled', 'You did not select any file.');
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    const { fullName, contactNumber } = formData;
    if (!fullName || !contactNumber) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }
    Alert.alert('Success', `Your appointment for ${service} has been submitted!`);
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

      {/* Form Section */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* User Details Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            value={formData.fullName}
            onChangeText={(value) => handleInputChange('fullName', value)}
          />

          <Text style={styles.label}>Contact Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your contact number"
            keyboardType="phone-pad"
            value={formData.contactNumber}
            onChangeText={(value) => handleInputChange('contactNumber', value)}
          />
        </View>

        {/* Upload Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upload Required Documents</Text>
          {requirements.map((requirement, index) => (
            <View key={index} style={styles.uploadSection}>
              <Text style={styles.requirementItem}>• {requirement}</Text>
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => handleDocumentPick(requirement)}
              >
                <Text style={styles.uploadButtonText}>
                  {uploadedFiles[requirement] || 'Choose File'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Appointment</Text>
        </TouchableOpacity>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  uploadSection: {
    marginBottom: 15,
  },
  requirementItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  uploadButton: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 15,
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

export default WeddingForm;
