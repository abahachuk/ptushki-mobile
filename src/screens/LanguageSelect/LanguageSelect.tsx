import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import { AppLanguages } from 'src/entities';
import { INTRODUCTION_STACK_ROUTE } from 'navigation/navigators/IntroductionNavigator/constants';
import Button, { ButtonType } from '../../components/PaperUIKit/Button';
import { styles } from './styles';

type ScreenProps = {
  onLocaleChange: (key: string) => void;
};

interface LanguageSelectProps {
  navigation: NavigationStackProp<{ navigate: (route: string) => void }>;
  screenProps: ScreenProps;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ navigation, screenProps }) => {
  const onPressLanguage = (key: string): void => {
    screenProps.onLocaleChange(key);

    navigation.navigate(INTRODUCTION_STACK_ROUTE);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Русский язык"
          type={ButtonType.OUTLINED}
          containerStyle={styles.buttonStyle}
          onPress={() => onPressLanguage(AppLanguages.RUSSIAN)}
        />
        <Button
          title="English"
          type={ButtonType.OUTLINED}
          containerStyle={styles.buttonStyle}
          onPress={() => onPressLanguage(AppLanguages.ENGLISH)}
        />
      </View>
    </View>
  );
};

export default LanguageSelect;
