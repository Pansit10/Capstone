import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MassSchedule = () => (
  <View>
    <Image source={require('../image/image2.png')} style={styles.massImage} />
    <View style={styles.massScheduleContainer}>
      <Text style={styles.massScheduleHeader}>Mass Schedule</Text>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleText}>Monday - 6:00 AM</Text>
        <Text style={styles.scheduleText}>Tuesday - 5:00 AM</Text>
        <Text style={styles.scheduleText}>Wednesday - 6:00 AM</Text>
        <Text style={styles.scheduleText}>Thursday - 5:00 AM</Text>
        <Text style={styles.scheduleText}>Friday - 6:00 AM</Text>
        <Text style={styles.scheduleText}>Saturday - 5:00 AM</Text>
        <Text style={styles.scheduleText}>Sunday - 6:00 AM</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  massImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  massScheduleContainer: {
    padding: 20,
    backgroundColor: '#EBD7BF',
    borderRadius: 10,
    marginBottom: 20,
  },
  massScheduleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  scheduleContainer: {
    alignItems: 'center',
  },
  scheduleText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default MassSchedule;