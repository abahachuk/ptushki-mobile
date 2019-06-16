import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";

const SettingsRadioButton = props => {
  const { isOn, text, onPress } = props;

  return (
    <View>
      <Icon.Button
        name={`md-radio-button-${isOn ? "on" : "off"}`}
        color="black"
        backgroundColor="white"
        onPress={onPress}
      >
        <Text style={styles.radioText}>{text}</Text>
      </Icon.Button>
    </View>
  );
};

SettingsRadioButton.propTypes = {
  isOn: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default SettingsRadioButton;
