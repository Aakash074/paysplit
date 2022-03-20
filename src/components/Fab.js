import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

export default function Fab() {
  return (
    <FAB
      style={styles.fab}
      uppercase={false}
      label="Quick Payment"
      icon="plus"
      onPress={() => console.log('Pressed')}
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 25,
    right: 0,
    bottom: 0,
  },
});
