import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const About = () => (
  <View>
    <Image source={require('../image/image1.png')} style={styles.aboutImage} />
    <View style={styles.aboutContainer}>
      <Text style={styles.sectionHeader}>About</Text>
      <Text style={styles.aboutText}>
        Established in 1971, the parish was carved from the parish of St. John the Baptist.
        The pioneering parish priest was Fr. Armando Perez. He built the church and rectory.
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  aboutImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  aboutContainer: {
    padding: 20,
    backgroundColor: '#EBD7BF',
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    textAlign: 'center',
  },
});

export default About;