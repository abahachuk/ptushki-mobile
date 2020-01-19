/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import {Alert, Text, View} from "react-native";

import { Button, Input } from "../../components";
import { translate } from "../../i18n";
import { styles } from "./styles";
import { AuthService } from "api";

const PasswordRecovery = props => {
  const { emailDefault } = props;

  const [email, setEmail] = useState(emailDefault);

  const authService = new AuthService();

  const onRecoveryPress = () => {
    authService
      .resetPassword(email)
      .then(data => {
        if (data) {
          props.navigation.navigate("passwordResetDone", {
            origin: "passwordRecovery"
          });
        }
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };
  const onBackPress = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.headerText}>
          {translate("passwordRecovery.recovery")}
        </Text>
        <Text style={styles.hintText}>
          {translate("passwordRecovery.instructionText")}
        </Text>
        <Input
          value={email}
          label={translate("passwordRecovery.email")}
          textContentType="emailAddress"
          onChangeText={setEmail}
        />
        <Button
          caption={translate("passwordRecovery.sendNewPassword")}
          onPress={onRecoveryPress}
          appearance="Dark"
          wrapperStyles={styles.resetPswBtn}
        />
      </View>
      <View style={styles.footer}>
        <Button
          caption={translate("passwordRecovery.back")}
          onPress={onBackPress}
          appearance="Borderless"
          wrapperStyles={styles.backButton}
        />
      </View>
    </View>
  );
};

PasswordRecovery.navigationOptions = {
  title: translate("passwordRecovery.recovery"),
  header: null
};

PasswordRecovery.propTypes = {
  emailDefault: PropTypes.string,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func
  }).isRequired
};
PasswordRecovery.defaultProps = {
  emailDefault: ""
};

export default PasswordRecovery;
