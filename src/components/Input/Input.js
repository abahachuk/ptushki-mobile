import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, TextInput, View, Image } from 'react-native';
import styles from './styles';

const icEyeHide = require('../../assets/ic_eye_hide/ic_eye_hide.png');
const icEyeShow = require('../../assets/ic_eye_show/ic_eye_show.png');

const Input = props => {
  const yPosition = useRef(0);
  const {
    error,
    onChangeText,
    textContentType,
    value,
    label,
    isShowBorder,
    customViewStyles,
    setFocusedInput,
    onTextInputBlur,
    isUnderlined,
    ...rest
  } = props;
  const [isFocused, setFocusedState] = useState(false);

  const getYPosition = useCallback(
    ({ nativeEvent }) => {
      const {
        layout: { y, height },
      } = nativeEvent;
      yPosition.current = y + height;
      if (isFocused) {
        setFocusedInput(yPosition.current);
      }
    },
    [isFocused, setFocusedInput],
  );

  const handleFocus = useCallback(() => {
    setFocusedState(true);
    setFocusedInput(yPosition.current);
  }, [setFocusedInput, yPosition]);
  const handleBlur = useCallback(() => {
    setFocusedState(false);
    onTextInputBlur();
  }, [onTextInputBlur]);
  const [isPassVisible, setPassVisibility] = useState(false);
  const handleShowHidePassword = () => {
    setPassVisibility(prevState => !prevState);
  };


  const labelStyles = [styles.label];
  const isPasswordInput = textContentType === 'password';

  if (isFocused || value) {
    labelStyles.push(styles.labelFocused);
  }

  if (error) {
    labelStyles.push(styles.labelWithErrors);
  }

  const { wrapperStyles } = props;
  const getContainerStyles = () => [
    styles.container,
    customViewStyles,
    isUnderlined ? styles.underlined : null,
    isShowBorder ? styles.border : null,
    error ? styles.containerWithErrors : null,
  ];

  return (
    <View style={wrapperStyles} onLayout={getYPosition}>
      <View style={getContainerStyles()}>
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
          secureTextEntry={isPasswordInput && !isPassVisible}
          {...rest}
        />
        {isPasswordInput && (
          <TouchableOpacity
            style={styles.showHidePassIcon}
            onPress={handleShowHidePassword}
            activeOpacity={0.8}
          >
            <Image style={styles.inputIcon} source={isPassVisible ? icEyeHide : icEyeShow} />
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

Input.propTypes = {
  onChangeText: PropTypes.func,
  onTextInputBlur: PropTypes.func,
  setFocusedInput: PropTypes.func,
  textContentType: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  isShowBorder: PropTypes.bool,
  wrapperStyles: PropTypes.any,
  customViewStyles: PropTypes.any,
  isUnderlined: PropTypes.bool,
};
Input.defaultProps = {
  onChangeText: () => {},
  onTextInputBlur: () => {},
  setFocusedInput: () => {},
  textContentType: 'none',
  value: '',
  label: '',
  error: '',
  isShowBorder: true,
  wrapperStyles: [],
  customViewStyles: {},
  isUnderlined: true,
};

export default Input;
