import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unresolved
import { FIRST_INTRO_SCREEN } from 'constants/introductionScreens';

import { styles } from './styles';

const LanguageButton = props => {
  const { title, langKey, navigation, screenProps, navigationRoute } = props;

  function onPress() {
    screenProps.onLocaleChange(langKey);
    navigation.navigate(FIRST_INTRO_SCREEN);
  }

  return (
    <Button
      title={title}
      onPress={onPress}
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
    navigate: PropTypes.func,
  }).isRequired,
  screenProps: PropTypes.shape({
    onLocaleChange: PropTypes.func,
  }).isRequired,
};

export default LanguageButton;
