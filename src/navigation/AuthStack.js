import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import PhoneSignIn from '../screens/LoginScreen';
import {View } from "react-native"
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <View>
      {/* <Stack.Screen name="Login" component={PhoneSignIn} /> */}
      <PhoneSignIn />
      {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
    </View>
  );
}
