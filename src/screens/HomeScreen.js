import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import FormButton from '../components/FormButton';
import Fab from '../components/Fab';
import auth from "@react-native-firebase/auth"
export default function HomeScreen({ navigation }) {
  console.log(navigation)
  return (
    <View style={styles.container}>
      <FormButton
        modeValue="contained"
        icon="plus"
        title="Add Shared Wallet"
        onPress={() => navigation.navigate('AddRoom')}
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
