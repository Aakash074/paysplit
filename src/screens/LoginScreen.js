import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native'
import { TextInput, Button, Flex, Text } from "@react-native-material/core";
import auth from '@react-native-firebase/auth';
import { View } from "react-native"
import {navigation} from "@react-navigation"
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import { Stack, ActivityIndicator } from "@react-native-material/core";
// import { database } from 'firebase';
import firestore from '@react-native-firebase/firestore';
export default function PhoneSignIn() {
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    
  }, []);

  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(false);
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
      <View style={styles.scene}>
     <TextInput value={phone} onChangeText={text => setPhone(text)} variant="outlined" label="Phone Number"  keyboardType="numeric" />
        <Button
          // style={ }
          disabled={Loading}
        title={Loading?<ActivityIndicator color="#00ff00"/>: "Log in"}
          onPress={() => {
            setLoading(true)
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
    setLoading(false)

                  });
            })
            .catch(e => console.log(e));
            
            
          }}
        />
      </View>
    );
  }

  
  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} titile="OTP"/>
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

const styles = StyleSheet.create({
  scene: {
    margin: "5%",
    justifyContent: "center"
  },
  btn: {
    
  }
  
});