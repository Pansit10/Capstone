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
    height: 220,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  aboutContainer: {
    padding: 25,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    marginBottom: 25,
    elevation: 13,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6A5D43',
    marginBottom: 15,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#4A4A4A',
    textAlign: 'justify',
  },
});

export default About;
