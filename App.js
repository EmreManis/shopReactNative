import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import ShopScreen from "./screens/ShopScreen";

import ShopNavigator from './navigation/ShopNavigator';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <ShopScreen />
    //   <StatusBar style="auto" />
    // </View>
    <ShopNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
