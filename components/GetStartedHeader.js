// components/GetStartedHeader.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const GetStartedHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../image/church_konek_logo2.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default GetStartedHeader;
