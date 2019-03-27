import React, { Component, useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const isSignedIn = () =>
  // mock function for the authentication check
  Promise.resolve(false);
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const AppContainer = props => {
  const [{ signedIn, isChecked }, setLoginData] = useState({
    signedIn: false,
    isChecked: false
  });

  useEffect(() => {
    isSignedIn().then(signedIn => setLoginData({ signedIn, isChecked: true }));
  }, []);

  return (
    <View style={styles.container}>
      {isChecked && signedIn ? (
        <Text>Signed in!</Text>
      ) : (
        <Text>Signed out :(</Text>
      )}
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  );
};

export default AppContainer;
