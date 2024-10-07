import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Footer = () => (
  <View style={styles.footerContainer}>
    <View style={styles.footerSection}>
      <FontAwesome name="facebook-square" size={24} color="#FFD700" />
      <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com')}>BVM, Queen of the World Parish</Text>
    </View>
    <View style={styles.footerSection}>
      <Ionicons name="call" size={20} color="#FFD700" />
      <Text style={styles.footerText}>(042) 719 1187</Text>
    </View>
    <View style={styles.footerSection}>
      <Ionicons name="location-outline" size={20} color="#FFD700" />
      <Text style={styles.footerText}>Villa Consolacion Subdivision, Lusacan, Tiaong, Quezon.</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#6A5D43',
    paddingVertical: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  footerText: {
    fontSize: 16,
    color: '#FFF',
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
  linkText: {
    fontSize: 16,
    color: '#FFD700',
    marginLeft: 10,
    textDecorationLine: 'underline',
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default Footer;
