import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Input from '../../components/Input';
import Button, { ButtonType } from '../../components/PaperUIKit/Button';
import { makeValidatorEmail, makeValidatorPassword } from '../../utils/validators';
import { translate } from '../../i18n';
import styles from './styles';

interface SettingsEmailProps {
  email: string;
  updateUserEmail: (email: string, password: string) => void;
}

const SettingsEmail: React.FC<SettingsEmailProps> = props => {
  const [email, setEmail] = useState<string>(props.email);
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const validatorEmail = makeValidatorEmail(translate('validationError.email'));
  const validatePassword = makeValidatorPassword(translate('validationError.password'));

  const onUpdateEmail = () => {
    const validationErrorEmail = validatorEmail(email);
    setEmailError(validationErrorEmail);
    const validationErrorPassword = validatePassword(password);
    setPasswordError(validationErrorPassword);

    if (!validationErrorEmail && !validationErrorPassword) props.updateUserEmail(email, password);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{translate('settings.email')}</Text>
      <Input
        value={email}
        label={translate('settings.email')}
        textContentType="emailAddress"
        error={emailError}
        isShowBorder={false}
        onChangeText={value => setEmail(value)}
      />
      <Input
        value={password}
        label={translate('settings.password')}
        isShowBorder={false}
        error={passwordError}
        onChangeText={value => setPassword(value)}
        textContentType="password"
        customViewStyles={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={translate('settings.refresh')}
          type={ButtonType.OUTLINED}
          containerStyle={styles.buttonStyle}
          onPress={onUpdateEmail}
        />
      </View>
    </View>
  );
};

export default SettingsEmail;
