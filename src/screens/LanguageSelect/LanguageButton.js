import React from "react";
import { Button } from "react-native-elements";
import { styles } from "./styles";

const LanguageButton = props => {
  const { title, langKey, navigation } = props;
  const onPress = key => {
    navigation.navigate("auth");
  };

  return (
    <Button
      title={title}
      onPress={() => onPress(langKey)}
      type="outline"
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.buttonTitleStyle}
    />
  );
};

export default LanguageButton;
