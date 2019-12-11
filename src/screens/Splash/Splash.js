import React, { useEffect } from "react";
import { View, Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";

const splashImg = require("../../assets/splash/splash.png");

const getInitialRoute = async () => {
  let initialRoute;
  const isShowIntroduction = await AsyncStorage.getItem("isShowIntroduction");
  if (isShowIntroduction !== "false") {
    await AsyncStorage.setItem("isShowIntroduction", "false");
    initialRoute = "introduction";
  } else initialRoute = "auth";
  return initialRoute;
};

const Splash = ({ navigation }) => {
  useEffect(() => {
    const navigateToScreen = async () => {
      const initialRoute = await getInitialRoute();
      navigation.navigate(initialRoute);
    };
    navigateToScreen();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={splashImg} style={styles.image} />
    </View>
  );
};

export default Splash;
