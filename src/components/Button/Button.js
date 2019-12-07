import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const Button = props => {
  const {
    onPress,
    caption,
    appearance,
    wrapperStyles,
    customTextStyles,
    borderColorStyle
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        wrapperStyles,
        styles[`button${appearance}`],
        borderColorStyle
      ]}
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
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  caption: PropTypes.string,
  appearance: PropTypes.oneOf(["Dark", "Light", "Borderless"]),
  wrapperStyles: PropTypes.any,
  customTextStyles: PropTypes.any,
  borderColorStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf([null])
  ])
};
Button.defaultProps = {
  onPress: () => {},
  caption: "",
  appearance: "Borderless",
  wrapperStyles: [],
  customTextStyles: [],
  borderColorStyle: null
};

export default Button;
