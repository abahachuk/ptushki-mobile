/* eslint-disable */
import React from "react";
import { ScrollView, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { translate } from "../../i18n";
// import SettingsInput from "./SettingsInput";
// import SettingsRadioButton from "./SettingsRadioButton";
// import LanguageButton from "../../components/LanguageButton/LanguageButton.js";
import LanguageSettingsSection from './LanguageSettingsSection'

const Settings = props => {

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      enabled
    >
      <KeyboardAvoidingView style={styles.container} enabled>
        {/* <Text style={styles.headerText}>
          {translate("settings.profileSettings")}
        </Text>

        <Text style={styles.hintText}>{translate("settings.email")}</Text>
        <SettingsInput labelKey="email" />
        <SettingsButton titleKey="refresh" updateCallback={emailRefresh} />

        <Text style={styles.hintText}>{translate("settings.password")}</Text>

        <SettingsInput labelKey="oldPassword" />
        <SettingsInput labelKey="newPassword" />

        <SettingsButton titleKey="refresh" updateCallback={passwordRefresh} />

        <Text style={styles.hintText}>
          {translate("settings.personalInfo")}
        </Text>
        <SettingsInput labelKey="firstName" />
        <SettingsInput labelKey="lastName" />
        <SettingsInput labelKey="phone" />
        <SettingsButton
          titleKey="refresh"
          updateCallback={personalInfoRefresh}
        /> */}

        <LanguageSettingsSection {...props} />

      </KeyboardAvoidingView>
    </ScrollView>
  );
};

Settings.navigationOptions = () => ({
  title: translate("topLevelMenu.settings")
});

export default Settings;
