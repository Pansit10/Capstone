import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker'; // Document picker to select files

const UploadDocuments = ({ route }) => {
  const { selectedDate, selectedTime } = route.params;
  const navigation = useNavigation(); // Use navigation for screen transitions
  const [documents, setDocuments] = useState({});

  const handleDocumentUpload = async (type) => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setDocuments((prev) => ({ ...prev, [type]: result.uri }));
    }
  };

  // Static submit button function to navigate back to the Wedding screen
  const handleStaticSubmit = () => {
    alert('Documents submitted successfully!');
    navigation.navigate('Wedding'); // Navigate back to the Wedding screen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Navigation Header */}
      <View style={styles.navigationHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.navigationTitle}>Upload Documents</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Upload Required Documents</Text>
        <Text style={styles.subtitle}>
          Appointment Date: {selectedDate} at {selectedTime}
        </Text>

        {/* Document Upload Buttons */}
        <View style={styles.uploadContainer}>
          <Text style={styles.uploadText}>Upload Baptismal Certificate</Text>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => handleDocumentUpload('baptismalCertificate')}
          >
            <Text style={styles.uploadButtonText}>
              {documents.baptismalCertificate ? 'Uploaded' : 'Upload'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.uploadContainer}>
          <Text style={styles.uploadText}>Upload Birth Certificate</Text>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => handleDocumentUpload('birthCertificate')}
          >
            <Text style={styles.uploadButtonText}>
              {documents.birthCertificate ? 'Uploaded' : 'Upload'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.uploadContainer}>
          <Text style={styles.uploadText}>Confirmation Certification</Text>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => handleDocumentUpload('confirmationCertification')}
          >
            <Text style={styles.uploadButtonText}>
              {documents.confirmationCertification ? 'Uploaded' : 'Upload'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Static Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleStaticSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
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
  content: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#6A5D43',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  uploadContainer: {
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  uploadButton: {
    paddingVertical: 12,
    backgroundColor: '#C69C6D',
    borderRadius: 5,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  submitButton: {
    marginTop: 30,
    paddingVertical: 15,
    backgroundColor: '#6A5D43',
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UploadDocuments;
