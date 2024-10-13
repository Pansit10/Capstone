import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => (
  <View style={styles.header}>
    <Image source={require('../assets/image/logo.png')} style={styles.logo} />
    <View style={styles.icons}>
      <Ionicons name="notifications-outline" size={28} color="#6A5D43" />
      <Ionicons name="person-circle-outline" size={28} color="#6A5D43" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 40,
    height: 40,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 70,
  },
});

export default Header;
