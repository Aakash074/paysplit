import React from 'react';
import {IconButton} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddRoomScreen from '../screens/AddRoomScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplitPay"
        component={HomeScreen}
        options={({navigation}) => ({
          headerLeft: () => <IconButton icon="menu" size={22} />,
          headerRight: () => (
            <IconButton icon={() => <Icon name="search" size={22}></Icon>} />
          ),
        })}
      />
      <Stack.Screen name="AddRoom" component={AddRoomScreen} />
    </Stack.Navigator>
  );
}
