import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack'
import SettingsScreen from './../screens/SettingsScreen'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} navigation/>
        <Tab.Screen name="Settings" component={SettingsScreen} navigation />
      </Tab.Navigator>
    </NavigationContainer>
  );
}