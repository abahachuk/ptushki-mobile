import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Text } from "react-native";
import { styles } from "./styles";

const Button = props => {
  const {
    onPress,
    caption,
    appearance,
    wrapperStyles,
    customTextStyles
  } = props;

  return (
    <TouchableHighlight
      style={[styles.button, wrapperStyles, styles[`button${appearance}`]]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          customTextStyles,
          styles[`buttonText${appearance}`]
        ]}
      >
        {caption}
      </Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  caption: PropTypes.string,
  appearance: PropTypes.oneOf(["Dark", "Light", "Borderless"]),
  wrapperStyles: PropTypes.any,
  customTextStyles: PropTypes.any
};
Button.defaultProps = {
  onPress: () => {},
  caption: "",
  appearance: "Borderless",
  wrapperStyles: [],
  customTextStyles: []
};

export default Button;
