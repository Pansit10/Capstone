import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('GetStarted1');
    }, 7000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../image/splash_screen_bg.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>
          <Animatable.Image
            animation="pulse"
            iterationCount="infinite"
            duration={2000}
            source={require('../image/church_konek_logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Animatable.Image
          animation="fadeInUp"
          duration={1500}
          delay={500}
          source={require('../image/church_konek_text_logo.png')}
          style={styles.textLogo}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  textLogo: {
    width: 500,
    height: 100,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
