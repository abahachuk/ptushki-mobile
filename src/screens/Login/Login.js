import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
/* eslint-disable-next-line */
import { Button, Input } from "components";

import { styles } from "./styles";
/* eslint-disable-next-line */
const logoImg = require("assets/logotype/logotype2x.png");

const Login = props => {
  const { email: emailFromProps, password: passwordFromProps } = props;
  const [email, setEmail] = useState(emailFromProps);
  const [password, setPassword] = useState(passwordFromProps);
  const onLoginPress = () => {
    props.onLogin({ email, password });
  };
  const onRegisterPress = () => {
    props.onRegister();
  };
  const onPasswordForgot = () => {};

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
          <Image style={styles.logoImg} resizeMode="contain" source={logoImg} />
          <Text style={styles.headerText}>
            Центр Кольцевания Птиц при Акажемии наук Республики Беларусь
          </Text>
        </View>
        <View>
          <Input
            value={email}
            label="E-mail"
            textContentType="emailAddress"
            onChangeText={setEmail}
          />
          <Input
            value={password}
            label="Пароль"
            textContentType="password"
            onChangeText={setPassword}
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
    </ScrollView>
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
