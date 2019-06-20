import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, KeyboardAvoidingView, TouchableHighlight } from "react-native";
import Modal from "react-native-modalbox";

/* eslint-disable */
import { Button, Input } from "components";
import { translate } from "../../i18n";
import { makeValidatorEmail, makeValidatorPassword } from "utils/validators";
import { modalWindowStyles } from "utils/modalWindowStyles";
import { styles } from "./styles";
import { AuthService } from "api";
import { FIRST_INTRO_SCREEN } from "constants/introductionScreens";

const logoImg = require("assets/logotype/logo.png");
const infoImg = require("assets/ic_info/ic_info2x.png");
/* eslint-enable */

const Login = props => {
  const {
    email: emailFromProps,
    password: passwordFromProps,
    error: errorFromProps,
    navigation
  } = props;
  const [email, setEmail] = useState(emailFromProps);
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState(passwordFromProps);
  const [error, setError] = useState(errorFromProps);
  const [passwordError, setPasswordError] = useState("");
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
    navigation.navigate(FIRST_INTRO_SCREEN);
  };

  return (
    <KeyboardAvoidingView style={styles.container} enabled>
      <View style={styles.loginContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.infoImgContainer}>
            <TouchableHighlight onPress={navigateToIntro}>
              <Image style={styles.infoImg} source={infoImg} />
            </TouchableHighlight>
          </View>
          <View style={styles.header}>
            <Image
              style={styles.logoImg}
              resizeMode="contain"
              source={logoImg}
            />
            <Text style={styles.headerText}>
              {translate("login.bandingCenter")}
            </Text>
          </View>
        </View>
        <View style={styles.loginForm}>
          <Input
            value={email}
            label={translate("login.email")}
            textContentType="emailAddress"
            onChangeText={setEmail}
            error={emailError}
            onTextInputBlur={onTextInputBlur}
          />
          <Input
            value={password}
            label={translate("login.password")}
            textContentType="password"
            onChangeText={setPassword}
            error={passwordError}
            onTextInputBlur={onTextInputBlur}
            wrapperStyles={[styles.passwordInput]}
          />
          <Button
            caption={translate("login.sign-in")}
            onPress={onLoginPress}
            appearance="Dark"
            wrapperStyles={styles.signInBtn}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          caption={translate("login.sign-up")}
          onPress={onRegisterPress}
          appearance="Light"
        />
        <Button
          caption={translate("login.forgotPassword")}
          onPress={onPasswordForgot}
          appearance="Borderless"
          wrapperStyles={styles.restorePswBtn}
        />
      </View>
      <Modal
        style={[modalWindowStyles.modal]}
        backdrop={false}
        position="top"
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
    </KeyboardAvoidingView>
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
