import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import R from "ramda";

import { Button, Input } from "../../components";

import { styles } from "./styles";

const logoImg = require("../../assets/logotype/logotype2x.png");

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
    props.navigation.navigate('registration')
  };
  const onPasswordForgot = () => {
    props.navigation.navigate('passwordReset')
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 20 }}
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
            onChangeText={curriedSetLoginData("email")}
          />
          <Input
            value={password}
            label="Пароль"
            textContentType="password"
            onChangeText={curriedSetLoginData("password")}
          />
          <Button caption="Войти" onPress={onLoginPress} appearance="Dark" />
        </View>
        <View>
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
