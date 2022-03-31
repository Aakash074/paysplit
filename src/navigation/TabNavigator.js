import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/HomeScreen'

import SettingsScreen from './../screens/SettingsScreen'
import QRcode from "./../screens/QRcode"
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}  options={{
        
          // tabBarIcon: ({ color }) => (

          // ),
        }}/>
        <Tab.Screen name="QRcode" component={QRcode} navigation />
        <Tab.Screen name="Settings" component={SettingsScreen} navigation />
      </Tab.Navigator>
    </NavigationContainer>
  );
}