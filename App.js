import 'react-native-gesture-handler'; // This should be at the top of the file
import React from 'react';
import * as Font from 'expo-font';
import { useFonts, DMSans_400Regular, DMSans_500Medium, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing Screens
import GetStarted1 from './screens/GetStarted1';
import GetStarted2 from './screens/GetStarted2';
import GetStarted3 from './screens/GetStarted3';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import SignUp from './screens/SignUp';
import VerificationScreen from './screens/VerificationScreen';
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
import AppointmentBooking from './screens/AppointmentBooking';
import UploadDocuments from './screens/UploadDocuments';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return null; // You can replace this with a loading component if desired
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false, // Hide headers globally
          animationEnabled: false, // Disable animations globally
        }}
      >
        {/* Ensure all screens are correctly defined */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="GetStarted1" component={GetStarted1} />
        <Stack.Screen name="GetStarted2" component={GetStarted2} />
        <Stack.Screen name="GetStarted3" component={GetStarted3} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="Wedding" component={Wedding} />
        <Stack.Screen name="Baptism" component={Baptism} />
        <Stack.Screen name="PrayerIntention" component={PrayerIntention} />
        <Stack.Screen name="FuneralMass" component={FuneralMass} />
        <Stack.Screen name="HouseBlessing" component={HouseBlessing} />
        <Stack.Screen name="RequestCertificate" component={RequestCertificate} />
        <Stack.Screen name="FirstCommunion" component={FirstCommunion} />
        <Stack.Screen name="Kumpil" component={Kumpil} />
        <Stack.Screen name="SpecialMass" component={SpecialMass} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="AppointmentBooking" component={AppointmentBooking} />
        <Stack.Screen name="UploadDocuments" component={UploadDocuments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
