import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import { View , Text} from "react-native"
import {navigation} from "@react-navigation"
import HomeStack from '../navigation/HomeStack';
export default function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

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
        onPress={() => signInWithPhoneNumber('+91'+phone)}
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