import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";

/* eslint-disable */
import { Button, Input } from "components";
import { translate } from "i18n";
import { validateEmail, validatePassword } from "utils/validators";
import { styles } from "./styles";

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
    props.onLogin({ email, password });
  };
  const onRegisterPress = () => {
    props.onRegister();
  };
  const onPasswordForgot = () => {};
  const onTextInputBlur = () => {
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
      <View style={styles.headerContainer}>
        <View style={styles.infoImgContainer}>
          <Image style={styles.infoImg} source={infoImg} />
        </View>
        <View style={styles.header}>
          <Image style={styles.logoImg} resizeMode="contain" source={logoImg} />
          <Text style={styles.headerText}>{translate("bandingCenter")}</Text>
        </View>
      </View>
      <View>
        <Input
          value={email}
          label="E-mail"
          textContentType="emailAddress"
          onChangeText={setEmail}
          error={emailError}
          onTextInputBlur={onTextInputBlur}
        />
        <Input
          value={password}
          label="Пароль"
          textContentType="password"
          onChangeText={setPassword}
          error={passwordError}
          onTextInputBlur={onTextInputBlur}
          wrapperStyles={[styles.passwordInput]}
        />
        <Button caption="Войти" onPress={onLoginPress} appearance="Dark" />
      </View>
      <View style={styles.footer}>
        <Button
          caption="Регистрация"
          onPress={onRegisterPress}
          appearance="Light"
        />
        <Button
          caption="Забыли пароль"
          onPress={onPasswordForgot}
          appearance="Borderless"
        />
      </View>
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
