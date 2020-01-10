import React from "react";
import { View, Text } from "react-native";
import Button, { ButtonType }  from "../../components/PaperUIKit/Button";
import styles from "./styles";

// TODO Add type for navigation props after update React navigation
// import { NavigationStackProp } from 'react-navigation-stack';

// TODO Remove that after PR redesign introduction screen
import { FIRST_INTRO_SCREEN } from "../../constants/introductionScreens";

interface LanguageSelectProps {
  navigation: any
}

const LanguageSelect: React.FC<LanguageSelectProps>  = ({ navigation }) => {

  const onPressLanguage = key => {
    // screenProps.onLocaleChange(key);

    navigation.navigate(FIRST_INTRO_SCREEN);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}><Text> </Text></View>
        <View style={styles.buttonsContainer}>
          <Button
            title="Русский язык"
            type={ButtonType.OUTLINED}
            containerStyle={styles.buttonStyle}
            onPress={() => onPressLanguage('ru')}
          />
          <Button
            title="English"
            type={ButtonType.OUTLINED}
            containerStyle={styles.buttonStyle}
            onPress={() => onPressLanguage('en')}
          />
      </View>
    </View>
  );
};

export default LanguageSelect;
