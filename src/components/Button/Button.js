import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Text } from "react-native";
import { styles } from "./styles";

const Button = props => {
  const { onPress, caption, appearance, style } = props;

  return (
    <TouchableHighlight
      style={[styles.button, styles[`button${appearance}`], style]}
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
  appearance: PropTypes.oneOf(["Dark", "Light", "Borderless"]),
  style: PropTypes.object
};
Button.defaultProps = {
  onPress: () => {},
  caption: "",
  appearance: "Borderless",
  style: {}
};

export default Button;
