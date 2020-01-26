import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Input from '../../components/Input';
import { translate } from '../../i18n';
import Button, { ButtonType } from '../../components/PaperUIKit/Button';
import { makeRequiredValidator } from '../../utils/validators';
import styles from './styles';

interface SettingsPersonalDataProps {
  userFirstName: string;
  userLastName: string;
  userPhone: string;
  updateUserPersonalData: (firstName: string, lastName: string, phone: string) => void;
}

const SettingsPersonalData: React.FC<SettingsPersonalDataProps> = ({
  userFirstName,
  userLastName,
  userPhone,
  updateUserPersonalData,
}) => {
  const [firstName, setFirstName] = useState<string>(userFirstName);
  const [lastName, setLastName] = useState<string>(userLastName);
  const [phone, setPhone] = useState<string>(userPhone);

  const [firstNameError, setFirstNameError] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const validateFirstName = makeRequiredValidator(translate('validationError.firstName'));
  const validateLastName = makeRequiredValidator(translate('validationError.lastName'));
  const validatePhone = makeRequiredValidator(translate('validationError.phone'));

  const onUpdatePersonalData = (): void => {
    const validationErrorFirstName = validateFirstName(firstName);
    setFirstNameError(validationErrorFirstName);
    const validationErrorLastName = validateLastName(lastName);
    setLastNameError(validationErrorLastName);
    const validationErrorPhone = validatePhone(phoneError);
    setPhoneError(validationErrorPhone);

    if (!validationErrorFirstName && !validationErrorLastName && !validationErrorPhone) {
      updateUserPersonalData(firstName, lastName, phone);
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{translate('settings.personalInfo')}</Text>
      <Input
        value={firstName}
        label={translate('settings.firstName')}
        isShowBorder={false}
        error={firstNameError}
        onChangeText={setFirstName}
        customViewStyles={styles.input}
      />
      <Input
        value={lastName}
        label={translate('settings.lastName')}
        isShowBorder={false}
        error={lastNameError}
        onChangeText={setLastName}
        customViewStyles={styles.input}
      />
      <Input
        value={phone}
        label={translate('settings.phone')}
        isShowBorder={false}
        error={phoneError}
        onChangeText={setPhone}
        customViewStyles={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={translate('settings.refresh')}
          type={ButtonType.OUTLINED}
          containerStyle={styles.buttonStyle}
          onPress={onUpdatePersonalData}
        />
      </View>
    </View>
  );
};

export default SettingsPersonalData;
