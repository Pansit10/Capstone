import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Event = () => (
  <View>
    <Image source={require('../image/image3.png')} style={styles.eventImage} />
    <View style={styles.eventContainer}>
      <Text style={styles.eventHeader}>Upcoming Event</Text>
      <Text style={styles.eventText}>March 13, 2024 - Kumpisalang Bayan at 5:00 PM</Text>
      <View style={styles.line} />
      <Text style={styles.eventText}>
        Ash Wednesday Schedule of Masses February 14, 2024 6:00 AM - 5:00 PM
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  eventImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 15,
  },
  eventContainer: {
    padding: 25,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    marginBottom: 25,
    elevation: 13,
  },
  eventHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6A5D43',
    marginBottom: 10,
  },
  eventText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#4A4A4A',
    textAlign: 'justify',
    marginBottom: 5,
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
});

export default Event;
