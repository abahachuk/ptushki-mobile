import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, KeyboardAvoidingView, ScrollView } from "react-native";

import { Button, Input } from "../../components";

import { styles } from "./styles";

const fields = {
  email: "email"
};

const PasswordRecovery = props => {
  const { emailDefault, hintText } = props;

  const [{ email }] = useState({
    [fields.email]: emailDefault
  });

  const onRecoveryPress = () => {
    props.onSubmit();
    props.navigation.navigate("passwordResetDone", {
      origin: "passwordRecovery",
      statusText: "Мы выслали вам новый пароль!",
      hintText:
        "Проверьте свой E-mail, чтобы получить новый пароль и введите его при входе. После этого у вас будет возможность его заменить"
    });
  };
  const onBackPress = () => {
    props.navigation.goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      enabled
    >
      <KeyboardAvoidingView style={styles.container} enabled>
        <Text style={styles.headerText}>Восстановление пароля</Text>
        <Text style={styles.hintText}>{hintText}</Text>
        <Input value={email} label="E-mail" textContentType="emailAddress" />

        <Button
          caption="Выслать новый пароль"
          onPress={onRecoveryPress}
          appearance="Dark"
        />
        <Button caption="НАЗАД" onPress={onBackPress} appearance="Borderless" />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

PasswordRecovery.navigationOptions = {
  title: "Восстановление пароля",
  header: null
};

PasswordRecovery.propTypes = {
  emailDefault: PropTypes.string,
  hintText: PropTypes.string,
  onSubmit: PropTypes.func,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func
  }).isRequired
};
PasswordRecovery.defaultProps = {
  emailDefault: "",
  hintText: "Введите ваш E-mail, чтобы мы выслали новый пароль",
  onSubmit: () => {}
};

export default PasswordRecovery;
