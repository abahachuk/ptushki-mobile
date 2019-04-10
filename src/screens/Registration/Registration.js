import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, ScrollView, KeyboardAvoidingView } from "react-native";

import {
  validateEmail,
  validatePassword,
  validateFirstName,
  validateLastName,
  validatePhone
} from "../../utils/validators";
import { styles } from "./styles";
import { Button, Input } from "../../components";
import { translate } from "../../i18n";

const fields = {
  email: "email",
  password: "password",
  firstName: "firstName",
  lastName: "lastName",
  phone: "phone"
};

const Registration = props => {
  const {
    emailDefault,
    passwordDefault,
    firstNameDefault,
    lastNameDefault,
    phoneDefault
  } = props;
  const [
    { email, password, firstName, lastName, phone },
    setRegistrationData
  ] = useState({
    [fields.email]: emailDefault,
    [fields.password]: passwordDefault,
    [fields.firstName]: firstNameDefault,
    [fields.lastName]: lastNameDefault,
    [fields.phone]: phoneDefault
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const setRegistrationDataCommon = field => value =>
    setRegistrationData(prevData => ({ ...prevData, [field]: value }));

  const onRegisterPress = () => {
    props.onSubmit();
  };
  const onBackPress = () => {
    // TODO: figure out whether it's possible just to trigger default android back button
    props.onBackNavigation();
  };
  const onAuthFieldBlur = () => {
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
  };
  const onFirstNameBlur = () => {
    setFirstNameError(validateFirstName(firstName));
  };
  const onLastNameBlur = () => {
    setLastNameError(validateLastName(lastName));
  };
  const onPhoneBlur = () => {
    setPhoneError(validatePhone(phone));
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      enabled
    >
      <KeyboardAvoidingView style={styles.container} enabled>
        <Text style={styles.headerText}>
          {translate("registration.sign-up")}
        </Text>
        <Input
          value={email}
          label={translate("registration.email")}
          textContentType="emailAddress"
          onChangeText={setRegistrationDataCommon(fields.email)}
          error={emailError}
          onTextInputBlur={onAuthFieldBlur}
        />
        <Input
          value={password}
          label={translate("registration.password")}
          textContentType="password"
          onChangeText={setRegistrationDataCommon(fields.password)}
          error={passwordError}
          onTextInputBlur={onAuthFieldBlur}
          wrapperStyles={[styles.belowInput]}
        />
        <Text style={styles.hintText}>
          {translate("registration.communicationDataHint")}
        </Text>
        <Input
          value={firstName}
          label={translate("registration.firstName")}
          textContentType="name"
          onChangeText={setRegistrationDataCommon(fields.firstName)}
          error={firstNameError}
          onTextInputBlur={onFirstNameBlur}
        />
        <Input
          value={lastName}
          label={translate("registration.lastName")}
          textContentType="familyName"
          onChangeText={setRegistrationDataCommon(fields.lastName)}
          error={lastNameError}
          onTextInputBlur={onLastNameBlur}
          wrapperStyles={[styles.belowInput]}
        />
        <Input
          value={phone}
          label={translate("registration.phone")}
          textContentType="telephoneNumber"
          onChangeText={setRegistrationDataCommon(fields.phone)}
          error={phoneError}
          onTextInputBlur={onPhoneBlur}
          wrapperStyles={[styles.belowInput, styles.lastInput]}
        />
        <Button
          caption={translate("registration.sign-up")}
          onPress={onRegisterPress}
          appearance="Dark"
        />
        <Button
          caption={translate("registration.back").toUpperCase()}
          onPress={onBackPress}
          appearance="Borderless"
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

Registration.propTypes = {
  emailDefault: PropTypes.string,
  passwordDefault: PropTypes.string,
  firstNameDefault: PropTypes.string,
  lastNameDefault: PropTypes.string,
  phoneDefault: PropTypes.string,
  onSubmit: PropTypes.func,
  onBackNavigation: PropTypes.func
};
Registration.defaultProps = {
  emailDefault: "",
  passwordDefault: "",
  firstNameDefault: "",
  lastNameDefault: "",
  phoneDefault: "",
  onSubmit: () => {},
  onBackNavigation: () => {}
};

export default Registration;