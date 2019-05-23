import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { styles } from "./styles";
import { translate } from "../../i18n";

const SettingsInput = props => {
  const { labelKey } = props;
  return (
    <View style={styles.inputContainer}>
      <Input
        placeholder=""
        label={translate(`settings.${labelKey}`)}
        labelStyle={styles.inputLabel}
      />
    </View>
  );
};
SettingsInput.propTypes = {
  labelKey: PropTypes.string.isRequired
};

export default SettingsInput;
