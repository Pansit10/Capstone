import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>
        <Image
          source={require('../image/logo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
      <Text style={styles.text}>BVM, Queen of The World Parish</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
  }
});

export default SplashScreen;
