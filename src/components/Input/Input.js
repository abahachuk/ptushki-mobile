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
    props.onTextInputBlur();
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

  const { wrapperStyles } = props;

  return (
    <View style={wrapperStyles}>
      <View style={[containerStyles, rest.customViewStyles]}>
        <Text style={labelStyles}>{label}</Text>
        <TextInput
          value={value}
          textContentType={textContentType}
          maxLength={100}
          onChangeText={onChangeText}
          style={[styles.textInput, rest.customTextStyles]}
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
            <Image
              style={[styles.inputIcon]}
              source={isPassVisible ? icEyeHide : icEyeShow}
            />
          </TouchableHighlight>
        )}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

Input.propTypes = {
  onChangeText: PropTypes.func,
  onTextInputBlur: PropTypes.func,
  textContentType: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  wrapperStyles: PropTypes.any
};
Input.defaultProps = {
  onChangeText: () => {},
  onTextInputBlur: () => {},
  textContentType: "none",
  value: "",
  label: "",
  error: "",
  wrapperStyles: []
};

export default Input;
