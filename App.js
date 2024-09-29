import 'react-native-gesture-handler'; // This should be at the top of the file
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './screens/GetStarted'; // Adjust the path as needed
import LoginScreen from './screens/LoginScreen'; // Adjust the path as needed
import SplashScreen from './screens/SplashScreen'; // Adjust the path as needed if you're using a splash screen
import SignUp from './screens/SignUp'; 
import VerificationScreen from './screens/VerificationScreen';  // Adjust path as needed
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />      
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Appointment" component={Appointment} options={{ headerShown: false }} />
        <Stack.Screen name="Wedding" component={Wedding} options={{ headerShown: false }} />
        <Stack.Screen name="Baptism" component={Baptism} options={{ headerShown: false }} />
        <Stack.Screen name="PrayerIntention" component={PrayerIntention} options={{ headerShown: false }} />
        <Stack.Screen name="FuneralMass" component={FuneralMass} options={{ headerShown: false }} />
        <Stack.Screen name="HouseBlessing" component={HouseBlessing} options={{ headerShown: false}} />
        <Stack.Screen name="RequestCertificate" component={RequestCertificate} options={{ headerShown: false}} />
        <Stack.Screen name="FirstCommunion" component={FirstCommunion} options={{ headerShown: false}} />
        <Stack.Screen name="Kumpil" component={Kumpil} options={{ headerShown: false}} />
        <Stack.Screen name="SpecialMass" component={SpecialMass} options={{ headerShown: false}} />
        <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false}} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

