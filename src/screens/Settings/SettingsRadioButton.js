import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";

const SettingsRadioButton = props => {
  const { state, text } = props;

  return (
    <View>
      <Icon.Button
        name={`md-radio-button-${state}`}
        color="black"
        backgroundColor="transparent"
      >
        <Text style={styles.radioText}>{text}</Text>
      </Icon.Button>
    </View>
  );
};

SettingsRadioButton.propTypes = {
  state: PropTypes.string,
  text: PropTypes.string.isRequired
};
SettingsRadioButton.defaultProps = {
  state: "off"
};

export default SettingsRadioButton;
