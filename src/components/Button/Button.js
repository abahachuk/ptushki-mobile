import React, { useState } from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Text } from "react-native";
import { styles } from "./styles";

const Button = props => {
  const { onPress, caption, appearance } = props;

  return (
    <TouchableHighlight
      style={[styles.button, styles[`button${appearance}`]]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, styles[`buttonText${appearance}`]]}>
        {caption}
      </Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  caption: PropTypes.string,
  appearance: PropTypes.oneOf(["Dark", "Light", "Borderless"])
};
Button.defaultProps = {
  onPress: () => {},
  caption: "",
  appearance: "Borderless"
};

export default Button;
