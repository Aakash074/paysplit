import React from 'react';
import {View, Text, PermissionsAndroid} from 'react-native';
import FormButton from '../components/FormButton';

export default function Wallet({ navigation }) {
  
  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    {
      'title': 'Contacts',
      'message': 'This app would like to view your contacts.',
      'buttonPositive': 'Please accept bare mortal'
    }
  )
    .then(Contacts.getAll()
      .then((contacts) => {
          // work with contacts
            console.log(contacts)
          })
            .catch((e) => {
                console.log(e)
            }))

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Wallet</Text>
     
    </View>
  );
}
