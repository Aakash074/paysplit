
import React from 'react';
import { Button, View, TextInput } from 'react-native';
export default function SettingsScreen({ navigation }) {
    const [inputCounter, setinputCounter] = useState(0)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
       
            <TextInput />

        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  }