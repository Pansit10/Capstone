import React from 'react';
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  View 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SubmitButton from '../screens/components/SubmitButton';

const Baptism = () => {
  const navigation = useNavigation();

  const handleAppointmentNavigation = () => {
    navigation.navigate('AppointmentForm', {
      service: 'Baptism',
      requirements: [
        'Birth certificate of Mother',
        'Birth certificate of Father',
        'Birth certificate of Child',
        'Ninong/Ninang Confirmation',
        'Marriage Certificate (if married)',
      ],
      items: [
        'Candle (provided by parents)',
        'Baptismal cloth (provided by church)',
        'Video of tree planting (required by church)',
      ],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Baptism</Text>
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('../assets/image/image5.png')} style={styles.image} />

        {/* Required Documents Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Documents Required for Baptism</Text>
          <View style={styles.requirementsList}>
            {[
              'Birth certificate of Mother',
              'Birth certificate of Father',
              'Birth certificate of Child',
              'Ninong/Ninang Confirmation',
              'Marriage Certificate (if married)',
            ].map((item, index) => (
              <Text key={index} style={styles.requirementItem}>
                • {item}
              </Text>
            ))}
          </View>
        </View>

        {/* Items Needed Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Items Needed</Text>
          <View style={styles.requirementsList}>
            {[
              'Candle (provided by parents)',
              'Baptismal cloth (provided by church)',
              'Video of tree planting (required by church)',
            ].map((item, index) => (
              <Text key={index} style={styles.requirementItem}>
                • {item}
              </Text>
            ))}
          </View>
        </View>

        {/* Appointment Button */}
        <SubmitButton 
          label="Make an Appointment" 
          onPress={handleAppointmentNavigation} 
        />
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
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
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
  requirementsList: {
    marginTop: 10,
  },
  requirementItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});

export default Baptism;
