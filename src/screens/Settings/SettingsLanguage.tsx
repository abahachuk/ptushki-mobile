import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Button, { ButtonType } from '../../components/PaperUIKit/Button';
import Radio from '../../components/PaperUIKit/Radio';
import { translate } from '../../i18n';
import { LanguagesType } from '../../entities';
import styles from './styles';

interface SettingsLanguageProps {
  language?: LanguagesType;
}

const SettingsLanguage: React.FC<SettingsLanguageProps> = ({ language }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguagesType>(language);
  const onUpdateLanguage = () => {};

  return (
    <View>
      <Text style={styles.header}>{translate('settings.language')}</Text>
      <Radio
        label={translate('settings.russian')}
        value={LanguagesType.RUSSIAN}
        isChecked={selectedLanguage === LanguagesType.RUSSIAN}
        onChangeValue={() => setSelectedLanguage(LanguagesType.RUSSIAN)}
      />
      <Radio
        label={translate('settings.english')}
        value={LanguagesType.ENGLISH}
        isChecked={selectedLanguage === LanguagesType.ENGLISH}
        onChangeValue={() => setSelectedLanguage(LanguagesType.ENGLISH)}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={translate('settings.refresh')}
          type={ButtonType.OUTLINED}
          containerStyle={styles.buttonStyle}
          onPress={onUpdateLanguage}
        />
      </View>
    </View>
  );
};

SettingsLanguage.defaultProps = {
  language: LanguagesType.ENGLISH,
};

export default SettingsLanguage;
