import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modalbox';

import Button, { ButtonType } from 'components/PaperUIKit/Button';
import Input from 'components/Input';
import {
  makeValidatorEmail,
  makeValidatorPassword,
  makeRequiredValidator,
} from '../../utils/validators';
import { modalWindowStyles } from '../../utils/modalWindowStyles';
import { styles } from './styles';
import { translate } from '../../i18n';
import { instanceAuthService } from '../../api';

const fields = {
  email: 'email',
  password: 'password',
  firstName: 'firstName',
  lastName: 'lastName',
  phone: 'phone',
};

const Registration = props => {
  const {
    error: errorFromProps,
    emailDefault,
    passwordDefault,
    firstNameDefault,
    lastNameDefault,
    phoneDefault,
  } = props;
  const [{ email, password, firstName, lastName, phone }, setRegistrationData] = useState({
    [fields.email]: emailDefault,
    [fields.password]: passwordDefault,
    [fields.firstName]: firstNameDefault,
    [fields.lastName]: lastNameDefault,
    [fields.phone]: phoneDefault,
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [error, setError] = useState(errorFromProps);

  const validateEmail = makeValidatorEmail(translate('validationError.email'));
  const validatePassword = makeValidatorPassword(translate('validationError.password'));
  const validateFirstName = makeRequiredValidator(translate('validationError.firstName'));
  const validateLastName = makeRequiredValidator(translate('validationError.lastName'));
  const validatePhone = makeRequiredValidator(translate('validationError.phone'));
  const modalRef = useRef(null);

  const setRegistrationDataCommon = field => value =>
    setRegistrationData(prevData => ({ ...prevData, [field]: value }));

  const onBackPress = () => {
    props.navigation.goBack();
  };
  const onEmailFieldBlur = () => {
    setEmailError(validateEmail(email));
  };
  const onPasswordFieldBlur = () => {
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

  const onRegisterPress = () => {
    const isEmailValidationError = validateEmail(email);
    const isPasswordValidationError = validatePassword(password);
    const isFirstNameValidationError = validateFirstName(firstName);
    const isLastNameValidationError = validateLastName(lastName);
    const isPhoneValidationError = validatePhone(phone);

    if (
      isEmailValidationError ||
      isPasswordValidationError ||
      isFirstNameValidationError ||
      isLastNameValidationError ||
      isPhoneValidationError
    ) {
      setEmailError(isEmailValidationError);
      setPasswordError(isPasswordValidationError);
      setFirstNameError(isFirstNameValidationError);
      setLastNameError(isLastNameValidationError);
      setPhoneError(isPhoneValidationError);
    } else {
      instanceAuthService
        .register(email, password, firstName, lastName, phone)
        .then(data => {
          if (data) {
            props.navigation.navigate('registrationSuccess', {
              origin: 'registration',
            });
          }
        })
        .catch(err => {
          setError(`"${err.message}"` || translate('registration.backendErrorMessage'));
          modalRef.current.open();
        });
    }
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.headerText}>{translate('registration.sign-up')}</Text>
        <Input
          value={email}
          label={translate('registration.email')}
          textContentType="emailAddress"
          onChangeText={setRegistrationDataCommon(fields.email)}
          error={emailError}
          onTextInputBlur={onEmailFieldBlur}
          isUnderlined={false}
        />
        <Input
          value={password}
          label={translate('registration.password')}
          textContentType="password"
          onChangeText={setRegistrationDataCommon(fields.password)}
          error={passwordError}
          onTextInputBlur={onPasswordFieldBlur}
          wrapperStyles={styles.belowInput}
          isUnderlined={false}
        />
        <Text style={styles.hintText}>{translate('registration.communicationDataHint')}</Text>
        <Input
          value={firstName}
          label={translate('registration.firstName')}
          textContentType="name"
          onChangeText={setRegistrationDataCommon(fields.firstName)}
          error={firstNameError}
          onTextInputBlur={onFirstNameBlur}
          isUnderlined={false}
        />
        <Input
          value={lastName}
          label={translate('registration.lastName')}
          textContentType="familyName"
          onChangeText={setRegistrationDataCommon(fields.lastName)}
          error={lastNameError}
          onTextInputBlur={onLastNameBlur}
          wrapperStyles={[styles.belowInput]}
          isUnderlined={false}
        />
        <Input
          value={phone}
          label={translate('registration.phone')}
          textContentType="telephoneNumber"
          onChangeText={setRegistrationDataCommon(fields.phone)}
          error={phoneError}
          onTextInputBlur={onPhoneBlur}
          wrapperStyles={[styles.belowInput, styles.lastInput]}
          isUnderlined={false}
        />
        <Button
          type={ButtonType.CONTAINED}
          title={translate('registration.register')}
          onPress={onRegisterPress}
          containerStyle={styles.footerBtn}
        />
        <Button
          type={ButtonType.TEXT}
          title={translate('registration.back').toUpperCase()}
          onPress={onBackPress}
          containerStyle={styles.footerBtn}
        />
        <Modal
          style={modalWindowStyles.modalContainer}
          backdrop={true}
          position="center"
          ref={modalRef}
        >
          <View style={modalWindowStyles.modal}>
            <Text style={modalWindowStyles.modalHeaderText}>
              {translate('registration.errorHeader')}
            </Text>
            <Text style={modalWindowStyles.modalText}>{error}</Text>
            <Button
              type={ButtonType.TEXT}
              title={translate('login.close')}
              labelStyle={modalWindowStyles.modalBtnText}
              containerStyle={modalWindowStyles.modalBtn}
              onPress={closeModal}
            />
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
Registration.navigationOptions = {
  title: 'Регистрация',
  header: null,
};

Registration.propTypes = {
  emailDefault: PropTypes.string,
  passwordDefault: PropTypes.string,
  firstNameDefault: PropTypes.string,
  lastNameDefault: PropTypes.string,
  phoneDefault: PropTypes.string,
  error: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};
Registration.defaultProps = {
  emailDefault: '',
  passwordDefault: '',
  firstNameDefault: '',
  lastNameDefault: '',
  phoneDefault: '',
  error: '',
};

export default Registration;
