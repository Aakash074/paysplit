import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import FormButton from '../components/FormButton';
import Fab from '../components/Fab';
import auth from "@react-native-firebase/auth"
import messaging from "@react-native-firebase/messaging"
import axios from 'axios';  

export default function HomeScreen({ navigation }) {




  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    const data = remoteMessage.data
    navigation.navigate('UPIpay', { data })
  });
  messaging().onMessage(async remoteMessage => {
    const data = remoteMessage.data
    navigation.navigate('UPIpay', {data})
  });
  function removeDuplicateObjectFromArray(array, key) {
    var check = new Set();
    return array.filter((obj) => !check.has(obj[key]) && check.add(obj[key]));
  }
  

  


  return (
    <View style={styles.container}>
      <FormButton
        modeValue="contained"
        icon="plus"
        title="Add Shared Wallet"
        onPress={() =>
          navigation.navigate('Wallet')
          // postExample()
        }
      />
      <Button onPress={()=>{ auth().signOut().then(() => console.log('User signed out!'))}} title="Log out"/>
      <Fab label="Quick Payment" />
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
