import React, { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Alert, 
  Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

const AppointmentForm = ({ route, navigation }) => {
  const { service, requirements } = route.params;
  const [formData, setFormData] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (requirement) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Allow all file types
        copyToCacheDirectory: true, // For better cross-platform consistency
      });

      if (result.type === 'success') {
        setUploadedFiles((prev) => ({ ...prev, [requirement]: result }));
        Alert.alert('Upload Successful', `${result.name} uploaded.`);
      } else {
        Alert.alert('Upload Cancelled', 'You did not select any file.');
      }
    } catch (error) {
      console.error('Document Picker Error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.contact) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      return;
    }
    Alert.alert('Success', `Your appointment for ${service} has been submitted!`);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>{service} Appointment</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onChangeText={(value) => handleInputChange('fullName', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            keyboardType="phone-pad"
            onChangeText={(value) => handleInputChange('contact', value)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upload Required Documents</Text>
          {requirements.map((requirement, index) => (
            <View key={index} style={styles.uploadSection}>
              <Text style={styles.requirementItem}>{requirement}</Text>
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => handleFileUpload(requirement)}
              >
                <Text style={styles.uploadButtonText}>
                  {uploadedFiles[requirement]?.name || 'Choose File'}
                </Text>
              </TouchableOpacity>
              {uploadedFiles[requirement] && (
                <Text style={styles.fileUploadedIndicator}>
                  Uploaded: {uploadedFiles[requirement]?.name}
                </Text>
              )}
            </View>
          ))}
        </View>

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
  scrollContent: {
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
  input: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  uploadSection: {
    marginBottom: 20,
  },
  requirementItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  uploadButton: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    paddingVertical: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 5,
  },
  uploadButtonText: {
    fontSize: 14,
    color: '#666',
  },
  fileUploadedIndicator: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#C69C6D',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppointmentForm;
