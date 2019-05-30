/* eslint-disable */
import React from "react";
import { Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { translate } from "../../i18n";
// import SettingsButton from "./SettingsButton";
// import SettingsInput from "./SettingsInput";
// import SettingsRadioButton from "./SettingsRadioButton";
import LanguageButton from "../../components/LanguageButton/LanguageButton.js";

const Settings = props => {
  // const emailRefresh = () => {};
  // const passwordRefresh = () => {};
  // const personalInfoRefresh = () => {};
  // const langRefresh = () => {};

  //TODO: styles for LanguageButtons

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

        {/* <Text style={styles.hintText}>{translate("settings.language")}</Text>
        <SettingsRadioButton state="on" text="Русский" />
        <SettingsRadioButton state="off" text="Беларуская мова" />
        <SettingsRadioButton state="off" text="English" /> */}

        {/* <SettingsButton titleKey="apply" updateCallback={langRefresh} /> */}
        <LanguageButton title="Беларуская мова" langKey="be" navigationRoute="Observations" {...props} />
        <LanguageButton title="Русский язык" langKey="ru" navigationRoute="Observations" {...props} />
        <LanguageButton title="English" langKey="en" navigationRoute="Observations" {...props} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

Settings.navigationOptions = () => ({
  title: translate("topLevelMenu.settings")
});

export default Settings;
