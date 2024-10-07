// AppointmentRequirements.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppointmentRequirements = () => (
  <View style={styles.section}>
    <Text style={styles.sectionHeader}>Required Documents and Items</Text>
    <View style={styles.requirementsList}>
      <Text style={styles.requirementItem}>• Birth certificates (child and parents)</Text>
      <Text style={styles.requirementItem}>• Candle (<Text style={styles.lighterText}>provided by parents</Text>)</Text>
      <Text style={styles.requirementItem}>• Baptismal cloth (<Text style={styles.lighterText}>provided by church</Text>)</Text>
      <Text style={styles.requirementItem}>• Video of tree planting (<Text style={styles.lighterText}>required by church</Text>)</Text>
      <Text style={styles.requirementItem}>• Ninong/Ninang confirmation</Text>
      <Text style={styles.requirementItem}>• Marriage certificate (<Text style={styles.lighterText}>if married</Text>)</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#FDF3E7',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A5D43',
    marginBottom: 10,
  },
  requirementsList: {
    paddingHorizontal: 10,
  },
  requirementItem: {
    fontSize: 16,
    color: '#333',
    lineHeight: 28,
    marginBottom: 10,
  },
  lighterText: {
    color: '#999',
  },
});

export default AppointmentRequirements;
