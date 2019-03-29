import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Login } from "./screens";

const isSignedIn = () =>
  // mock function for the authentication check
  Promise.resolve(false);

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

const AppContainer = () => {
  const [{ signedIn, isChecked }, setLoginData] = useState({
    signedIn: false,
    isChecked: false
  });

  useEffect(() => {
    isSignedIn().then(isAuthenticated =>
      setLoginData({ signedIn: isAuthenticated, isChecked: true })
    );
  }, []);

  return (
    <View style={styles.container}>
      {isChecked && signedIn ? (
        <Text>Signed in!</Text>
      ) : (
        <Login />
      )}
    </View>
  );
};

export default AppContainer;
