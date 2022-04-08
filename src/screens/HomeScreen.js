import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import FormButton from '../components/FormButton';
import Fab from '../components/Fab';
import auth from "@react-native-firebase/auth"
import messaging from "@react-native-firebase/messaging"
import axios from 'axios';  
import { Surface } from "@react-native-material/core";
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import UPIpay from './UPIpay';
export default function HomeScreen({ navigation }) {

  // messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  //   const data = remoteMessage.data
  //   // navigation.navigate('UPIpay', { data })
  //   console.log("Background Message Handler Activated \n")
  //   console.log(JSON.stringify(navigation)+ " \n Navigation Object HomeScreen")
  //   navigation.navigate('UPIpay', { uri:data.uri })
  //   // navigation.navigate('PaymentStack', {
  //   //   screen: 'UPIpay',
  //   //   params: { uri: data.uri }
  //   // });

  // });

  // const usersCollection = firestore().collection('tokens').doc(auth().currentUser.phoneNumber).collection('transactions');
//   function getTransactions() {
//     firestore().collection('tokens').doc('+916360861215').get().then(res=>res.forEach(documentSnapshot => {
//       console.log('User ID: ', documentSnapshot.id,
//           documentSnapshot.collection('transactions').get().then(res=>console.log(res)));
//   }))
//   // console.log(usersCollection + "thsi is user xollwxtion")
//  }
  // messaging().onMessage(async remoteMessage => {
  //   const data = remoteMessage.data
  //   console.log("Foreground Message Handler Activated \n")

  //   console.log(JSON.stringify(navigation)+ "\n Navigation Object HomeScreen")

  //   // navigation.navigate('UPIpay', {uri:data.uri})
  //   navigation.navigate('PaymentStack', { screen: 'UPIpay', params: { uri: data.uri } });
  //   // const propsdub = {
  //   //   route: {
  //   //     uri: data.uri
  //   //   }
  //   // }
  //   // return <UPIpay props={ propsdub }/>
  // });

  const arr = ['1','2','3','4','5','6','7','8']
  return (
    <ScrollView style={styles.container}>
     
    </ScrollView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    marginLeft: 0,
  },
});
