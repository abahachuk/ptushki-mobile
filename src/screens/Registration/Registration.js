import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { Button, Input } from "../../components";

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
    phoneDefault,
    hintText
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

  const setRegistrationDataCommon = field => value =>
    setRegistrationData(prevData => ({ ...prevData, [field]: value }));

  const onRegisterPress = () => {
    props.onSubmit();
    props.navigation.navigate("mainPage");
  };
  const onBackPress = () => {
    // TODO: figure out whether it's possible just to trigger default android back button
    props.onBackNavigation();
    props.navigation.navigate("login");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      enabled
    >
      <KeyboardAvoidingView style={styles.container} enabled>
        <Text style={styles.headerText}>Регистрация</Text>
        <Input
          value={email}
          label="E-mail"
          textContentType="emailAddress"
          onChangeText={setRegistrationDataCommon(fields.email)}
        />
        <Input
          value={password}
          label="Пароль"
          textContentType="password"
          onChangeText={setRegistrationDataCommon(fields.password)}
        />
        <Text style={styles.hintText}>{hintText}</Text>
        <Input
          value={firstName}
          label="Имя"
          textContentType="name"
          onChangeText={setRegistrationDataCommon(fields.firstName)}
        />
        <Input
          value={lastName}
          label="Фамилия"
          textContentType="familyName"
          onChangeText={setRegistrationDataCommon(fields.lastName)}
        />
        <Input
          value={phone}
          label="Телефон"
          textContentType="telephoneNumber"
          onChangeText={setRegistrationDataCommon(fields.phone)}
        />
        <Button
          caption="Регистрация"
          onPress={onRegisterPress}
          appearance="Dark"
        />
        <Button caption="НАЗАД" onPress={onBackPress} appearance="Borderless" />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
Registration.navigationOptions = {
  title: "Регистрация",
  header: null
  // styles in case we want android app header and back button enabled
  // headerStyle: {
  //   backgroundColor: '#fff',
  // },
  // headerTintColor: '#4f6e7c',
  // headerTitleStyle: {
  //   fontSize: 34,
  //   color: "#4f6e7c"
  // },
};

Registration.propTypes = {
  emailDefault: PropTypes.string,
  passwordDefault: PropTypes.string,
  firstNameDefault: PropTypes.string,
  lastNameDefault: PropTypes.string,
  phoneDefault: PropTypes.string,
  hintText: PropTypes.string,
  onSubmit: PropTypes.func,
  onBackNavigation: PropTypes.func,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
Registration.defaultProps = {
  emailDefault: "",
  passwordDefault: "",
  firstNameDefault: "",
  lastNameDefault: "",
  phoneDefault: "",
  hintText:
    "Следующие данные нужны для связи с вами в случае, если потребуется уточнить данные",
  onSubmit: () => {},
  onBackNavigation: () => {}
};

export default Registration;
