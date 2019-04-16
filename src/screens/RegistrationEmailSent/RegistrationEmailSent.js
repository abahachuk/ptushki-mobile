
import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

import { Button } from "../../components";

import { styles } from "./styles";
/* eslint react/jsx-one-expression-per-line: 0 */

const logoImg = require("../../assets/logotype/logotype2x.png");

const RegistrationEmailSent = props => {
  const { navigation } = props;

  const goToLogin = () => {
    navigation.navigate("login");
  };

  const statusText = navigation.getParam(
    "statusText",
    "Ура! Мы зарегистрировались"
  );
  const hintText = navigation.getParam(
    "hintText",
    "Проверьте свой E-mail, чтобы продолжить. Если долго ничего не приходит - проверьте спам или повторите!"
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
          <Image style={styles.logoImg} resizeMode="contain" source={logoImg} />
          <Text style={styles.headerText}>
            Центр Кольцевания Птиц при Академии наук Республики Беларусь
          </Text>
          <Text style={styles.statusText}>{statusText}</Text>
          <Text style={styles.hintText}>{hintText}</Text>
        </View>
        <View>
          <Button
            caption="Перейти ко входу"
            onPress={goToLogin}
            appearance="Dark"
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

RegistrationEmailSent.navigationOptions = {
  title: "Войти",
  header: null
};
RegistrationEmailSent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func
  }).isRequired
};

RegistrationEmailSent.defaultProps = {};

export default RegistrationEmailSent;
