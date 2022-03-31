import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import FormButton from '../components/FormButton';
import Fab from '../components/Fab';
import auth from "@react-native-firebase/auth"
import messaging from "@react-native-firebase/messaging"
import axios from 'axios';  
import {MaterialCommunityIcons} from "@expo/vector-icons"
export default function HomeScreen({ navigation }) {




  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    const data = remoteMessage.data
    // navigation.navigate('UPIpay', { data })
    console.log(JSON.stringify(data.uri)+"console 111")
    navigation.navigate('UPIpay', { uri:data.uri })
  });
  messaging().onMessage(async remoteMessage => {
    const data = remoteMessage.data
    navigation.navigate('UPIpay', {uri:data.uri})
  });

  


  return (
    <View style={styles.container}>
      {/* <FormButton
        modeValue="contained"
        icon="plus"
        title="Add Shared Wallet"
        onPress={() =>
          navigation.navigate('Wallet')
          // postExample()
        }
      /> */}
      
     
      {/* <Fab label="Quick Payment" /> */}
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    marginLeft: 0,
  },
});
