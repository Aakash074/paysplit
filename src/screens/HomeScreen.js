import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import Fab from '../components/Fab';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <FormButton
        modeValue="contained"
        icon="plus"
        title="Add Shared Wallet"
        onPress={() => navigation.navigate('AddRoom')}
      />
      <Fab />
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
