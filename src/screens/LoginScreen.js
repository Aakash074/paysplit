import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import { View , Text} from "react-native"
import {navigation} from "@react-navigation"
import HomeStack from '../navigation/HomeStack';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
// import { database } from 'firebase';
import firestore from '@react-native-firebase/firestore';
export default function PhoneSignIn() {
  useEffect(() => {
    
  }, []);

  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [token, setToken] = useState('')
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('')
  const [codeconfirm, setcodeconfirm] = useState(null)
  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      let response = await confirm.confirm(code);
      if(response)
      setcodeconfirm(true)
    } catch (error) {
      console.log('Invalid code.'+ error);
    }
  }

  if (!confirm) {
    return (
      <View>
     <TextInput value={phone} onChangeText={text => setPhone(text)} />
      <Button
        title="Phone Number Sign In"
          onPress={() => {
            signInWithPhoneNumber('+91' + phone)
            messaging()
            .getToken(firebase.app().options.messagingSenderId)
            .then(token => {
              // setToken(token)
              firestore()
                  .collection('tokens')
                  .doc(phone)
                  .set({
                    token: token,
                    phoneNumber: phone,
                  })
                  .then(() => {
                    console.log('User added!');
                  });
            })
            .catch(e => console.log(e));
            
            
          }}
        />
        </View>
    );
  }
  if (codeconfirm)
    return <View><Text>Login Success</Text></View>
  
  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}