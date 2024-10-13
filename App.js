import 'react-native-gesture-handler'; // This should be at the top of the file
import React from 'react';
import * as Font from 'expo-font';
import { useFonts, DMSans_400Regular, DMSans_500Medium, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing Screens from their new folder
import GetStarted1 from './screens/GetStarted1';
import GetStarted2 from './screens/GetStarted2';
import GetStarted3 from './screens/GetStarted3';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import SignUp from './screens/SignUp';
import VerificationScreen from './screens/VerificationScreen';
import HomePage from './screens/HomePage';
import Appointment from './screens/homepage/Appointment';
import Calendar from './screens/homepage/Calendar';
import Certificate from './screens/homepage/Certificate';
import ChurchDonation from './screens/homepage/ChurchDonation';
import Profile from './screens/homepage/Profile';
import PrayerIntention from './screens/homepage/PrayerIntention';
import Wedding from './screens/Wedding';
import Baptism from './screens/Baptism';
import FuneralMass from './screens/FuneralMass';
import HouseBlessing from './screens/HouseBlessing';
import RequestCertificate from './screens/RequestCertificate';
import FirstCommunion from './screens/FirstCommunion';
import Kumpil from './screens/Kumpil';
import SpecialMass from './screens/SpecialMass';
import AppointmentBooking from './screens/AppointmentBooking';
import UploadDocuments from './screens/UploadDocuments';
import AppointmentForm from './screens/appointments/AppointmentForm';
import HouseBlessingForm from './screens/appointments/HouseBlessingForm';
import FirstCommunionForm from './screens/appointments/FirstCommunionForm';
import KumpilForm from './screens/appointments/KumpilForm';
import SpecialMassForm from './screens/appointments/SpecialMassForm';
import WeddingForm from './screens/appointments/WeddingForm';

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
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Certificate" component={Certificate} />
        <Stack.Screen name="Church Donation" component={ChurchDonation} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Prayer Intention" component={PrayerIntention} />
        <Stack.Screen name="Wedding" component={Wedding} />
        <Stack.Screen name="Baptism" component={Baptism} />
        <Stack.Screen name="Funeral Mass" component={FuneralMass} />
        <Stack.Screen name="House Blessing" component={HouseBlessing} />
        <Stack.Screen name="RequestCertificate" component={RequestCertificate} />
        <Stack.Screen name="First Communion" component={FirstCommunion} />
        <Stack.Screen name="Kumpil" component={Kumpil} />
        <Stack.Screen name="Special Mass" component={SpecialMass} />
        <Stack.Screen name="AppointmentBooking" component={AppointmentBooking} />
        <Stack.Screen name="UploadDocuments" component={UploadDocuments} />
        <Stack.Screen name="AppointmentForm" component={AppointmentForm} />
        <Stack.Screen name="HouseBlessingForm" component={HouseBlessingForm} />
        <Stack.Screen name="FirstCommunionForm" component={FirstCommunionForm} />
        <Stack.Screen name="KumpilForm" component={KumpilForm} />
        <Stack.Screen name="SpecialMassForm" component={SpecialMassForm} />
        <Stack.Screen name="WeddingForm" component={WeddingForm} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
