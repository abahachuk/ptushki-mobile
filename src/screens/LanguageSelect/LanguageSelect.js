import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import LanguageButton from "./LanguageButton";

const languageBird = require("./../../assets/languageBird/Bird.png");

const LanguageSelect = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={languageBird} resizeMethod="scale" />
        <View style={{}}>
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
    </View>
  );
};

export default LanguageSelect;
