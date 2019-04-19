import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, KeyboardAvoidingView, ScrollView } from "react-native";

import { Button, Input } from "../../components";
import { translate } from "../../i18n";
import { styles } from "./styles";

const fields = {
  email: "email"
};

const PasswordRecovery = props => {
  const { emailDefault } = props;

  const [{ email }] = useState({
    [fields.email]: emailDefault
  });

  const onRecoveryPress = () => {
    props.onSubmit();
    props.navigation.navigate("passwordResetDone", {
      origin: "passwordRecovery",
      statusText: translate("passwordRecovery.statusText"),
      hintText: translate("passwordRecovery.passwordSentText")
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
        />
        <Button
          caption={translate("passwordRecovery.sendNewPassword")}
          onPress={onRecoveryPress}
          appearance="Dark"
        />
        <Button
          caption={translate("passwordRecovery.back")}
          onPress={onBackPress}
          appearance="Borderless"
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

PasswordRecovery.navigationOptions = {
  title: translate("passwordRecovery.recovery"),
  header: null
};

PasswordRecovery.propTypes = {
  emailDefault: PropTypes.string,
  onSubmit: PropTypes.func,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func
  }).isRequired
};
PasswordRecovery.defaultProps = {
  emailDefault: "",
  onSubmit: () => {}
};

export default PasswordRecovery;
