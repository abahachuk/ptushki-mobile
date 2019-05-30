import React from "react";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import { styles } from "./styles";
// import AsyncStorage from "@react-native-community/async-storage";

const LanguageButton = props => {
  const { title, langKey, navigation, screenProps } = props;
  /* eslint-disable-next-line */
  const onPress = async (key) => {
    console.log(key, "set");
    navigation.navigate("auth");
    screenProps.changeLocale(key);
    // await AsyncStorage.setItem('lang', key);
  };

  return (
    <Button
      title={title}
      onPress={() => onPress(langKey)}
      type="clear"
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.buttonTitleStyle}
    />
  );
};

LanguageButton.propTypes = {
  title: PropTypes.string.isRequired,
  langKey: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired,
  screenProps: PropTypes.func.isRequired
};

export default LanguageButton;
