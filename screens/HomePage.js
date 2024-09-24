import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require('../image/logo.png')} 
            style={styles.logo}
          />
          <View style={styles.icons}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Ionicons name="person-circle" size={24} color="black" />
          </View>
        </View>
        <Image
            source={require('../image/image1.png')} 
            style={styles.aboutImage}
          />
        <View style={styles.aboutContainer}>
          <Text style={styles.sectionHeader}>About</Text>
  
          <Text style={styles.aboutText}>
            Established in 1971, the parish was carved from the parish of St. John the Baptist.
            The pioneering parish priest was Fr. Armando Perez. He built the church and rectory.
          </Text>
        </View>
        <Image
            source={require('../image/image2.png')} 
            style={styles.massImage}
          />
        <View style={styles.massScheduleContainer}>
          <Text style={styles.massScheduleHeader}>Mass Schedule</Text>
          <Text style={styles.scheduleText}>Monday - 6:00 AM</Text>
          <Text style={styles.scheduleText}>Tuesday - 5:00 AM</Text>
          <Text style={styles.scheduleText}>Wednesday - 6:00 AM</Text>
          <Text style={styles.scheduleText}>Thursday - 5:00 AM</Text>
          <Text style={styles.scheduleText}>Friday - 6:00 AM</Text>
          <Text style={styles.scheduleText}>Saturday - 5:00 AM</Text>
          <Text style={styles.scheduleText}>Sunday - 6:00 AM</Text>
        </View>
        <Image
            source={require('../image/image3.png')} 
            style={styles.eventImage}
          />
        <View style={styles.eventContainer}>
          <Text style={styles.eventHeader}>Upcoming Event</Text>
          <Text style={styles.eventText}>March 13, 2024 - Kumpisalang Bayan at 5:00 PM</Text>
        </View>
      </ScrollView>
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
      padding: 20,
      paddingTop: 40,
      backgroundColor: '#f7f7f7',
    },
    logo: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
    },
    icons: {
      flexDirection: 'row',
      width: 70,
      justifyContent: 'space-between',
    },
    churchImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    aboutContainer: {
      padding: 20,
      backgroundColor: '#EBD7BF',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    sectionHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    aboutText: {
      fontSize: 16,
      lineHeight: 24,
      color: '#666',
      textAlign: 'center',  
    },
    aboutImage: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
      marginBottom: 10,
    },
    massScheduleContainer: {
      padding: 20,
      backgroundColor: '#EBD7BF',
      marginTop: 10,
    },
    massScheduleHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    massImage: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
      marginBottom: 10,
    },
    scheduleText: {
      fontSize: 16,
      lineHeight: 24,
      color: '#666',
      textAlign: 'center',  
      marginBottom: 5,
    },
    eventContainer: {
      padding: 20,
      backgroundColor: '#EBD7BF',
      marginTop: 10,
      marginBottom: 20,
    },
    eventHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    eventImage: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
      marginBottom: 10,
    },
    eventText: {
      fontSize: 16,
      lineHeight: 24,
      color: '#666',
      textAlign: 'center',
    }
  });
  

export default HomePage;
