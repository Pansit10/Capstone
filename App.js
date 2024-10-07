import 'react-native-gesture-handler'; // This should be at the top of the file
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';
import { useFonts, DMSans_400Regular, DMSans_500Medium, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Importing Screens
import GetStarted from './screens/GetStarted'; // Adjust the path as needed
import LoginScreen from './screens/LoginScreen'; // Adjust the path as needed
import SplashScreen from './screens/SplashScreen'; // Adjust the path as needed if you're using a splash screen
import SignUp from './screens/SignUp';
import VerificationScreen from './screens/VerificationScreen'; // Adjust path as needed
import HomePage from './screens/HomePage';
import Appointment from './screens/Appointment';
import Wedding from './screens/Wedding';
import Baptism from './screens/Baptism';
import PrayerIntention from './screens/PrayerIntention';
import FuneralMass from './screens/FuneralMass';
import HouseBlessing from './screens/HouseBlessing';
import RequestCertificate from './screens/RequestCertificate';
import FirstCommunion from './screens/FirstCommunion';
import Kumpil from './screens/Kumpil';
import SpecialMass from './screens/SpecialMass';
import Calendar from './screens/Calendar';
import Menu from './screens/Menu';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return null; // You can replace `null` with a loading indicator if desired
  }

  const screens = [
    { name: 'SplashScreen', component: SplashScreen },
    { name: 'GetStarted', component: GetStarted },
    { name: 'LoginScreen', component: LoginScreen },
    { name: 'SignUp', component: SignUp },
    { name: 'VerificationScreen', component: VerificationScreen },
    { name: 'HomePage', component: HomePage },
    { name: 'Appointment', component: Appointment },
    { name: 'Wedding', component: Wedding },
    { name: 'Baptism', component: Baptism },
    { name: 'PrayerIntention', component: PrayerIntention },
    { name: 'FuneralMass', component: FuneralMass },
    { name: 'HouseBlessing', component: HouseBlessing },
    { name: 'RequestCertificate', component: RequestCertificate },
    { name: 'FirstCommunion', component: FirstCommunion },
    { name: 'Kumpil', component: Kumpil },
    { name: 'SpecialMass', component: SpecialMass },
    { name: 'Calendar', component: Calendar },
    { name: 'Menu', component: Menu },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false, // Default option to hide the header on all screens
          animationEnabled: false, // Disable transition animations
        }}
      >
        {screens.map((screen, index) => (
          <Stack.Screen key={index} name={screen.name} component={screen.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
