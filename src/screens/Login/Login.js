import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  TextInput,
  TouchableHighlight,
  Text,
  Image,
  KeyboardAvoidingView
} from "react-native";
import R from "ramda";

import { styles } from "./styles";

const logoImg = require("../../assets/logo.png");

const Login = props => {
  const { email: emailFromProps, password: passwordFromProps } = props;
  const [{ email, password }, setLoginData] = useState({
    email: emailFromProps,
    password: passwordFromProps
  });

  const curriedSetLoginData = R.curry((field, value) => {
    setLoginData(prevData => ({ ...prevData, [field]: value }));
  });
  const onLoginPress = () => {
    props.onLogin({ email, password });
  };
  const onRegisterPress = () => {
    props.onRegister();
  };

  return (
    <KeyboardAvoidingView style={styles.container} enabled>
      <Image style={styles.logoImg} source={logoImg} />
      <Text style={styles.headerText}>Войти</Text>
      <TextInput
        value={email}
        textContentType="emailAddress"
        placeholder="Электронная почта"
        maxLength={100}
        onChangeText={curriedSetLoginData("email")}
        style={styles.input}
      />
      <TextInput
        value={password}
        textContentType="password"
        placeholder="Пароль"
        maxLength={100}
        onChangeText={curriedSetLoginData("password")}
        style={styles.input}
        secureTextEntry
      />
      <TouchableHighlight
        style={[styles.button, styles.buttonLogin]}
        onPress={onLoginPress}
      >
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.button, styles.buttonRegister]}
        onPress={onRegisterPress}
      >
        <Text style={styles.buttonText}>Регистрация</Text>
      </TouchableHighlight>
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
