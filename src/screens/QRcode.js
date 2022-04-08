import React, {useState} from 'react';
import { Button, View } from 'react-native';
import Scan from './scan';
import auth from '@react-native-firebase/auth';
import WalletScreen from "./WalletScreen";

const QRcode = ({navigation}) => {
  const [Result, setResult] = useState(false)
      
  
  return <Scan navigation={navigation} />
    // <View>
    
     
    // </View>
   
  
};
export default QRcode;