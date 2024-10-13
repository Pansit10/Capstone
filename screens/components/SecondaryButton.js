import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get the full width of the screen

const SecondaryButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6A5D43',
    paddingVertical: 17,
    borderRadius: 25, // Corner rounding of 20
    alignItems: 'center',
    marginHorizontal: 20, // Horizontal margin of 20
    width: width - 80, // Full width minus the horizontal margins
    alignSelf: 'center', // Center the button
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SecondaryButton;
