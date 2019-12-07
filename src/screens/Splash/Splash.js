import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";

const splashImg = require("assets/splash/Splash.png");

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={splashImg} style={styles.image} />
    </View>
  );
};

export default Splash;
