import React, { useState } from "react";
import { Text, View } from "react-native";
import Input from "../../components/Input";
import Button, { ButtonType } from "../../components/PaperUIKit/Button";
import { makeValidatorPassword } from "../../utils/validators";
import { translate } from "../../i18n";
import styles from "./styles";

interface SettingsPasswordProps {
  updateUserPassword: (password: string, newPassword: string) => void,
}

const SettingsPassword: React.FC<SettingsPasswordProps> = ({ updateUserPassword }) => {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const [passwordError, setPasswordError] = useState<string>('');
  const [newPasswordError, setNewPasswordError] = useState<string>('');

  const validatePassword = makeValidatorPassword(translate("validationError.password"));

  const onUpdatePassword = () => {
    const validationErrorPassword = validatePassword(password);
    setPasswordError(validationErrorPassword);
    const validationErrorNewPassword = validatePassword(newPassword);
    setNewPasswordError(validationErrorNewPassword);

    if (!validationErrorPassword && !validationErrorNewPassword) updateUserPassword(password, password);
  };
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{translate("settings.password")}</Text>
      <Input
        value={password}
        label={translate("settings.oldPassword")}
        isShowBorder={false}
        error={passwordError}
        onChangeText={value => setPassword(value)}
        textContentType="password"
        customViewStyles={styles.input}
      />
      <Input
        value={newPassword}
        label={translate("settings.newPassword")}
        isShowBorder={false}
        error={newPasswordError}
        onChangeText={value => setNewPassword(value)}
        textContentType="password"
      />
      <View style={styles.buttonContainer}>
        <Button
          title={translate(`settings.refresh`)}
          type={ButtonType.OUTLINED}
          containerStyle={styles.buttonStyle}
          onPress={onUpdatePassword}
        />
      </View>
    </View>
  );
};

export default SettingsPassword;

