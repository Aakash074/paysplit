import * as React from 'react';
import { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/HomeScreen'
import firebase from "react-native-firebase";
import messaging from "@react-native-firebase/messaging"
import {} from 'react-native-paper'
import * as RootNavigation from "./RootNavigation"
import PaymentStack from "./PaymentStack"
import SettingsScreen from './../screens/SettingsScreen'
import QRcode from "./../screens/QRcode"
import { navigationRef } from './RootNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    
  
    createNotificationLnrs()
  })
  
  const createNotificationLnrs = async function createNotificationListeners() {
    /*
     * Triggered when a particular notification has been received in foreground
     * */

    // console.log("listeners working")
    // notificationListener = firebase
    //   .notifications()
    //   .onNotification((notification) => {
    //     const { title, body } = notification;
    //     console.log(title + " title");
    //     console.log("console 1 ")
    //     // showAlert(title, body);
    //   });


    /*
     * Triggered for data only payload in foreground
     * */
    messaging().onMessage((message) => {
      //process data message
      const data = message.data
      console.log("foreground message listener running ....")
      console.log(JSON.stringify(message) + " message");
      RootNavigation.navigate('PaymentStack', {
        screen: 'UPIpay', params: {
          uri:data.uri
      }})
    });



  //    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  //   const data = remoteMessage.data
  //   // navigation.navigate('UPIpay', { data })
  //   console.log("Background Message Handler Activated \n")
  //   console.log(JSON.stringify(navigation)+ " \n Navigation Object HomeScreen")
  //   // navigation.navigate('UPIpay', { uri:data.uri })
  //   RootNavigation.navigate('PaymentStack', {
  //     screen: 'UPIpay',
  //     params: { uri: data.uri }
  //   });

  // });

    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    // notificationOpenedListener = firebase
    //   .notifications()
    //   .onNotificationOpened((notificationOpen) => {
    //     const { title, body } = notificationOpen.notification;
    //     // showAlert(title, body);
    //     console.log(title = ' title');
    //     console.log("console 2 ")
    //   });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      // showAlert(title, body);
      console.log(title + " title 3");
      console.log(notificationOpen.notification._data.uri)
      RootNavigation.navigate('PaymentStack', {
        screen: 'UPIpay', params: {
          uri:notificationOpen.notification._data.uri
      }})
    }
    
  };
  return (
    // <NavigationContainer ref={navigationRef}>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if(route.name ==='Scan QR'){
            iconName = focused ? 'qr-code': 'qr-code-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3A86FF',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Home" component={HomeScreen} navigation IconButton/>
        <Tab.Screen name="Scan QR" component={PaymentStack} navigation  options={{headerShown:false}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} navigation />
      </Tab.Navigator>
      // </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   fab: {
//     position: "absolute",
//     margin: 25,
//     right: 0,
//     bottom: 0,
//   },
//   ion-icon {
//     color: blue;
//   }
// });