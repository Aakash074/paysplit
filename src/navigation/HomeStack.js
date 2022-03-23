import React from 'react';
import {IconButton} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import QRcode from '../screens/QRcode';
import UPIpay from '../screens/UPIpay';
import AddRoomScreen from '../screens/AddRoomScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();

export default function HomeStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplitPay"
        component={HomeScreen}
        options={({ navigation }) => ({
          
          // headerLeft: () => <IconButton icon="menu" size={22} />,
          headerRight: () => (
            <IconButton icon={() => <Icon name="qr-code-outline" size={22} onPress={()=> navigation.navigate('QRcode')} title="Log out"></Icon>} />
          ),
        })}
      />
      <Stack.Screen name="AddRoom" component={AddRoomScreen} />
      <Stack.Screen name="QRcode" component={QRcode} />
    </Stack.Navigator>
  );
}
