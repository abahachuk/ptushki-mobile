import React, { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Animated
} from "react-native";
import Modal from "react-native-modalbox";

/* eslint-disable */
import { Button, Input } from "components";
import { SCREEN_HEIGHT } from "constants/dimensions";
import { translate } from "../../i18n";
import { makeValidatorEmail, makeValidatorPassword } from "utils/validators";
import { modalWindowStyles } from "utils/modalWindowStyles";
import { styles } from "./styles";
import { AuthService } from "api";
import { FIRST_INTRO_SCREEN } from "constants/introductionScreens";
import { showKeyboard, hideKeyboard } from "constants/keyboard";

const logoImg = require("assets/logotype/logo.png");
const infoImg = require("assets/ic_info/ic_info.png");
/* eslint-enable */

const RESERVE_PLACE_FOR_BUTTON = 80;

const Login = props => {
  const {
    email: emailFromProps,
    password: passwordFromProps,
    error: errorFromProps,
    navigation
  } = props;
  const [email, setEmail] = useState(emailFromProps);
  // const [email, setEmail] = useState("tkaolgav@mail.ru");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState(passwordFromProps);
  // const [password, setPassword] = useState("321172ptushki");

  const [error, setError] = useState(errorFromProps);
  const [passwordError, setPasswordError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);
  const authService = new AuthService();

  const onLoginPress = () => {
    authService
      .logIn(email, password)
      .then(data => {
        if (data) {
          navigation.navigate("mainPage");
        }
      })
      .catch(err => {
        setError(err.message || translate("login.backendErrorMessage"));
        setIsVisible(true);
        modalRef.current.open();
      });
  };

  const onRegisterPress = () => {
    props.onRegister();
    navigation.navigate("registration");
  };
  const onPasswordForgot = () => {
    navigation.navigate("passwordReset");
  };
  const closeModal = () => {
    setIsVisible(false);
    modalRef.current.close();
  };

  const validateEmail = makeValidatorEmail(translate("validationError.email"));
  const validatePassword = makeValidatorPassword(
    translate("validationError.password")
  );
  const onTextInputBlur = () => {
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
  };
  const navigateToIntro = () => {
    navigation.navigate(FIRST_INTRO_SCREEN, {
      goBack: () => navigation.navigate("login") // TODO: clarify requirements
    });
  };

  /** keyboard avoiding */

  const keyboardHeight = useRef(0);
  const scrollRef = useRef(null);
  const offset = useRef(new Animated.Value(0));

  let focusedInputYPosition = 0;

  const toggleViewHeight = useCallback((value = 0) => {
    if (
      !value ||
      focusedInputYPosition + RESERVE_PLACE_FOR_BUTTON >
        SCREEN_HEIGHT - keyboardHeight.current
    ) {
      Animated.timing(offset.current, {
        toValue: -value / 2.5,
        duration: 200,
        useNativeDriver: true
      }).start();
    }
  });

  const setFocusedInput = useCallback(inputYPosition => {
    focusedInputYPosition = inputYPosition;
    toggleViewHeight(keyboardHeight.current);
  });

  useEffect(() => {
    function onKeyboardShow(event) {
      keyboardHeight.current = event.endCoordinates.height || 0;

      toggleViewHeight(keyboardHeight.current);
    }

    function onKeyboardHide() {
      toggleViewHeight(0);
    }

    const keyboardWillShowSub = Keyboard.addListener(
      showKeyboard,
      onKeyboardShow
    );
    const keyboardWillHideSub = Keyboard.addListener(
      hideKeyboard,
      onKeyboardHide
    );

    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    };
  });

  return (
    <ScrollView
      ref={scrollRef}
      style={styles.scrollContainer}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View
        style={[
          styles.loginContainer,
          { transform: [{ translateY: offset.current }] }
        ]}
      >
        <Image style={styles.logoImg} resizeMode="contain" source={logoImg} />
        <Text style={styles.headerText}>
          {translate("login.bandingCenter")}
        </Text>
        <TouchableOpacity
          style={styles.infoImgContainer}
          onPress={navigateToIntro}
          activeOpacity={0.8}
        >
          <Image style={styles.infoImg} source={infoImg} />
        </TouchableOpacity>
        <Input
          value={email}
          label={translate("login.email")}
          textContentType="emailAddress"
          onChangeText={setEmail}
          error={emailError}
          onTextInputBlur={onTextInputBlur}
          setFocusedInput={setFocusedInput}
        />
        <Input
          value={password}
          label={translate("login.password")}
          textContentType="password"
          onChangeText={setPassword}
          error={passwordError}
          onTextInputBlur={onTextInputBlur}
          wrapperStyles={[styles.passwordInput]}
          setFocusedInput={setFocusedInput}
        />
        <Button
          caption={translate("login.sign-in")}
          onPress={onLoginPress}
          appearance="Dark"
          wrapperStyles={styles.signInBtn}
        />
      </Animated.View>
      <View style={styles.footer}>
        <Button
          caption={translate("login.sign-up")}
          onPress={onRegisterPress}
          appearance="Light"
          wrapperStyles={styles.signUpBtn}
          customTextStyles={styles.buttonText}
          borderColorStyle={styles.signUpBorder}
        />
        <Button
          caption={translate("login.forgotPassword")}
          onPress={onPasswordForgot}
          appearance="Borderless"
          wrapperStyles={styles.restorePswBtn}
          customTextStyles={styles.buttonText}
        />
      </View>
      {isVisible && (
        <Modal
          style={[modalWindowStyles.modal]}
          backdrop={false}
          position="center"
          ref={modalRef}
        >
          <Text style={[modalWindowStyles.modalText]}>{error}</Text>
          <Button
            caption={translate("login.close")}
            onPress={closeModal}
            wrapperStyles={modalWindowStyles.modalBtn}
            appearance="Borderless"
          />
        </Modal>
      )}
    </ScrollView>
  );
};

Login.navigationOptions = () => ({
  title: translate("registration.sign-in"),
  header: null
});
Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  onRegister: PropTypes.func,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func
  }).isRequired
};
Login.defaultProps = {
  email: "",
  password: "",
  error: "",
  onRegister: () => {}
};

export default Login;
