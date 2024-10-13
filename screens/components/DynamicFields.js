import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import DatePicker from './DatePicker';

const DynamicField = ({ label, type, value, onChange }) => {
  if (type === 'date') {
    return (
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>{label}</Text>
        <DatePicker date={value} onDateChange={onChange} />
      </View>
    );
  }

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={`Enter ${label.toLowerCase()}...`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
});

export default DynamicField;
