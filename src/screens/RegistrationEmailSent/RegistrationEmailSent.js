import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';

import Button, { ButtonType } from 'components/PaperUIKit/Button';

import { translate } from '../../i18n';
import { styles } from './styles';
/* eslint react/jsx-one-expression-per-line: 0 */

const logoImg = require('../../assets/logotype/Logo.png');

const RegistrationEmailSent = props => {
  const { navigation } = props;

  const goToLogin = () => {
    navigation.navigate('login');
  };

  const origin = navigation.getParam('origin', 'registration');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image style={styles.logoImg} resizeMode="contain" source={logoImg} />
        <Text style={styles.headerText}>{translate('bandingCenter')}</Text>
        <Text style={styles[`${origin}StatusText`]}>{translate(`${origin}.statusText`)}</Text>
        <Text style={styles.hintText}>{translate(`${origin}.hintText`)}</Text>
        <Button
          type={ButtonType.CONTAINED}
          title={translate('registrationEmailSent.goToLogin')}
          containerStyle={styles.backBtn}
          labelStyle={styles.backBtnText}
          onPress={goToLogin}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

RegistrationEmailSent.navigationOptions = {
  title: translate('login.sign-in'),
  header: null,
};
RegistrationEmailSent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};

RegistrationEmailSent.defaultProps = {};

export default RegistrationEmailSent;
