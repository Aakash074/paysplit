import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PhoneSignIn from '../screens/LoginScreen';
import {View } from "react-native"
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <View>
      {/* <Stack.Screen name="Login" component={PhoneSignIn} /> */}
      <PhoneSignIn />
    
    </View>
  );
}
