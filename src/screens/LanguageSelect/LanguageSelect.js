import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import LanguageButton from "./LanguageButton";

const languageBird = require("./../../assets/languageBird/Bird.png");

const LanguageSelect = props => {
  return (
    <View style={styles.container}>
      <Image source={languageBird} style={styles.image} />
      <View style={styles.buttonsContainer}>
        <LanguageButton
          title="Беларуская мова"
          langKey="be"
          navigationRoute="auth"
          {...props}
        />
        <LanguageButton
          title="Русский язык"
          langKey="ru"
          navigationRoute="auth"
          {...props}
        />
        <LanguageButton
          title="English"
          langKey="en"
          navigationRoute="auth"
          {...props}
        />
      </View>
    </View>
  );
};

export default LanguageSelect;
