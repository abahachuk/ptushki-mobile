import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { styles } from "./styles";
import SettingsRadioButton from "./SettingsRadioButton";
import { translate } from "../../i18n";
import SettingsButton from "./SettingsButton";

const LanguageSettingsSection = props => {
  const { screenProps } = props;
  const [locale, setCurrentLocale] = useState(screenProps.currentLocale);

  const langRefresh = key => {
    setCurrentLocale(key);
  };

  const globalRefresh = () => {
    screenProps.onLocaleChange(locale);
  };

  return (
    <View>
      <Text style={styles.hintText}>{translate("settings.language")}</Text>
      <SettingsRadioButton
        isOn={locale === "ru"}
        text="Русский"
        onPress={() => langRefresh("ru")}
      />
      <SettingsRadioButton
        isOn={locale === "be"}
        text="Беларуская мова"
        onPress={() => langRefresh("be")}
      />
      <SettingsRadioButton
        isOn={locale === "en"}
        text="English"
        onPress={() => langRefresh("en")}
      />
      <SettingsButton titleKey="apply" updateCallback={globalRefresh} />
    </View>
  );
};

LanguageSettingsSection.propTypes = {
  screenProps: PropTypes.shape({
    onLocaleChange: PropTypes.func,
    currentLocale: PropTypes.string
  }).isRequired
};

export default LanguageSettingsSection;
