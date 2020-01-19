import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';

import { Button } from '../../components';
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
        <View>
          <Image style={styles.logoImg} resizeMode="contain" source={logoImg} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>{translate('passwordRecovery.bandingCenter')}</Text>
            <Text style={styles.headerText}>{translate('passwordRecovery.academy')}</Text>
          </View>
          <Text style={styles.statusText}>{translate(`${origin}.statusText`)}</Text>
          <Text style={styles.hintText}>{translate(`${origin}.hintText`)}</Text>
        </View>
        <View>
          <Button
            caption={translate('registrationEmailSent.goToLogin')}
            onPress={goToLogin}
            appearance="Dark"
          />
        </View>
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
