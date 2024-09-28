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
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
