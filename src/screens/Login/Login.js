import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

/* eslint-disable */
import { Button, Input } from "components";
import { translate } from "../../i18n"
import { makeValidatorEmail, makeValidatorPassword } from "utils/validators";
import { styles } from "./styles";

import { AuthService } from "../../api";

const logoImg = require("assets/logotype/logotype2x.png");
const infoImg = require("assets/ic_info/ic_info2x.png");
/* eslint-enable */

const Login = props => {
  const { email: emailFromProps, password: passwordFromProps } = props;
  const [email, setEmail] = useState(emailFromProps);
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState(passwordFromProps);
  const [passwordError, setPasswordError] = useState("");

  const onLoginPress = () => {
    AuthService.logIn(email, password)
      .then(data => {
        if (data) {
          console.info("Login is successful");
          props.onLogin({ signedIn: true, isChecked: true });
        }
      })
      .catch(err => {
        console.info(err.message);
      });
  };

  const onRegisterPress = () => {
    props.onRegister();
  };

  const onPasswordForgot = () => {};
  const validateEmail = makeValidatorEmail(translate("validationError.email"));
  const validatePassword = makeValidatorPassword(
    translate("validationError.password")
  );
  const onTextInputBlur = () => {
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.infoImgContainer}>
            <Image style={styles.infoImg} source={infoImg} />
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
        <View>
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
          />
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
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func
};
Login.defaultProps = {
  email: "",
  password: "",
  onLogin: () => {},
  onRegister: () => {}
};

export default Login;
