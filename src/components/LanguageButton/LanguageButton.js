import React from "react";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-community/async-storage";
import { styles } from "./styles";
import { changeLocale } from "../../i18n";

const LanguageButton = props => {
  const { title, langKey, navigation, screenProps, navigationRoute } = props;

  const onPress = async key => {
    changeLocale(key);
    screenProps.onLocaleChange(key);
    navigation.navigate(navigationRoute);
    await AsyncStorage.setItem("lang", key);
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
  navigationRoute: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired,
  screenProps: PropTypes.shape({
    onLocaleChange: PropTypes.func
  }).isRequired
};

export default LanguageButton;
