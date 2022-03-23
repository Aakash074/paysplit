import React from 'react';
import { Button, View } from 'react-native';
import Scan from './scan';
import auth from '@react-native-firebase/auth';
const QRcode = () => {
  return  <Scan />
    // <View>
      {/* <Button onPress={()=>{ auth().signOut().then(() => console.log('User signed out!'))}} title="Log out"/> */}
     
    // </View>
   
  
};
export default QRcode;