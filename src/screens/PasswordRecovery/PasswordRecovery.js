/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Text, View } from 'react-native';

import Button, { ButtonType } from 'components/PaperUIKit/Button';
import Input from 'components/Input';
import { translate } from '../../i18n';
import { styles } from './styles';
import { instanceAuthService } from 'api';

const PasswordRecovery = props => {
  const { emailDefault } = props;

  const [email, setEmail] = useState(emailDefault);

  const onRecoveryPress = () => {
    instanceAuthService
      .resetPassword(email)
      .then(data => {
        if (data) {
          props.navigation.navigate('passwordResetDone', {
            origin: 'passwordRecovery',
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
        <Text style={styles.headerText}>{translate('passwordRecovery.recovery')}</Text>
        <Text style={styles.hintText}>{translate('passwordRecovery.instructionText')}</Text>
        <Input
          value={email}
          label={translate('passwordRecovery.email')}
          textContentType="emailAddress"
          onChangeText={setEmail}
          isUnderlined={false}
        />
        <Button
          type={ButtonType.CONTAINED}
          title={translate('passwordRecovery.sendNewPassword')}
          onPress={onRecoveryPress}
          containerStyle={styles.resetPswBtn}
          labelStyle={styles.resetPswBtnText}
        />
      </View>
      <View style={styles.footer}>
        <Button
          type={ButtonType.TEXT}
          title={translate('passwordRecovery.back')}
          onPress={onBackPress}
          containerStyle={styles.backButton}
        />
      </View>
    </View>
  );
};

PasswordRecovery.navigationOptions = {
  title: translate('passwordRecovery.recovery'),
  header: null,
};

PasswordRecovery.propTypes = {
  emailDefault: PropTypes.string,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
PasswordRecovery.defaultProps = {
  emailDefault: '',
};

export default PasswordRecovery;
