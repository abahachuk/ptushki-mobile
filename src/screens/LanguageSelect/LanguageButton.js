import React from "react";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";

// eslint-disable-next-line import/no-unresolved
import { FIRST_INTRO_SCREEN } from "constants/introductionScreens";

import { styles } from "./styles";

const LanguageButton = props => {
  const { title, langKey, navigation } = props;
  /* eslint-disable-next-line */
  const onPress = key => {
    navigation.navigate(FIRST_INTRO_SCREEN);
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
  }).isRequired
};

export default LanguageButton;
