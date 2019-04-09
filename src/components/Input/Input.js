import React, { useState } from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, Text, TextInput, View, Image } from "react-native";
import { styles } from "./styles";

const icEyeHide = require("../../assets/ic_eye_hide/ic_eye_hide2x.png");
const icEyeShow = require("../../assets/ic_eye_show/ic_eye_show2x.png");

const Input = props => {
  const [isFocused, setFocusedState] = useState(false);
  const handleFocus = () => {
    setFocusedState(true);
  };
  const handleBlur = () => {
    setFocusedState(false);
  };
  const [isPassVisible, setPassVisibility] = useState(false);
  const handleShowHidePassword = () => {
    setPassVisibility(prevState => !prevState);
  };

  const { error, onChangeText, textContentType, value, label, ...rest } = props;
  const containerStyles = [styles.container];
  const labelStyles = [styles.label];
  const isPasswordInput = textContentType === "password";
  const additionalProps = {};

  if (isFocused || value) {
    labelStyles.push(styles.labelFocused);
  }

  if (error) {
    containerStyles.push(styles.containerWithErrors);
    labelStyles.push(styles.labelWithErrors);
  }

  if (isPasswordInput && !isPassVisible) {
    additionalProps.secureTextEntry = true;
  }

  return (
    <View>
      <View style={containerStyles}>
        <Text style={labelStyles}>{label}</Text>
        <TextInput
          value={value}
          textContentType={textContentType}
          maxLength={100}
          onChangeText={onChangeText}
          style={styles.textInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          blurOnSubmit
          {...rest}
          {...additionalProps}
        />
        {isPasswordInput && (
          <TouchableHighlight
            style={[styles.showHidePassIcon]}
            onPress={handleShowHidePassword}
          >
            <Image source={isPassVisible ? icEyeHide : icEyeShow} />
          </TouchableHighlight>
        )}
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

Input.propTypes = {
  onChangeText: PropTypes.func,
  textContentType: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string
};
Input.defaultProps = {
  onChangeText: () => {},
  textContentType: "",
  value: "",
  label: "",
  error: ""
};

export default Input;