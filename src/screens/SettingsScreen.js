
import React, { useState } from 'react';
import { Button, View, TextInput, Text } from 'react-native';
import auth from "@react-native-firebase/auth"

export default function SettingsScreen({ navigation }) {
    const [inputCounter, setinputCounter] = useState(0)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Button onPress={()=>{ auth().signOut().then(() => console.log('User signed out!'))}} title="Log out"/>
      </View>
    );
  }