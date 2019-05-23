import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./styles";
import { translate } from "../../i18n";

const SettingsButton = props => {
  const { titleKey, updateCallback } = props;

  return (
    <View style={styles.buttonContainer}>
      <Button
        title={translate(`settings.${titleKey}`)}
        onPress={updateCallback}
        type="outline"
        buttonStyle={styles.buttonContainer}
        titleStyle={styles.buttonTitleStyle}
      />
    </View>
  );
};

SettingsButton.propTypes = {
  titleKey: PropTypes.string.isRequired,
  updateCallback: PropTypes.func.isRequired
};

export default SettingsButton;
