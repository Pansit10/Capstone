import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => (
  <View style={styles.header}>
    <Image source={require('../image/logo.png')} style={styles.logo} />
    <View style={styles.icons}>
      <Ionicons name="notifications-outline" size={24} color="black" />
      <Ionicons name="person-circle-outline" size={24} color="black" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 50,
    height: 50,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
});

export default Header;