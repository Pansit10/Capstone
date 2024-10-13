// ServiceCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ServiceCard = ({ image, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    width: '48%', // Ensure the card fits two columns
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#333',
  },
});

export default ServiceCard;
