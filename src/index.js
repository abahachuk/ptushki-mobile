import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import {
  AppExtendedContainer,
  AppPrimaryContainer
} from "./navigation/navigators/AppNavigator";
import TranslationProvider, {
  Translation
} from "./components/TranslationProvider";
import { changeLocale } from "./i18n";

const AppLocalised = () => {
  const [locale, changeLocaleState] = useState("ru");
  const [isFirstLaunch, toggleFirstLaunch] = useState(true);
  let UltimateNavigator = AppExtendedContainer;

  const onLocaleChange = localeKey => {
    changeLocale(localeKey);
    changeLocaleState(localeKey);
  };

  useEffect(() => {
    AsyncStorage.getItem("lang").then(langSet => {
      toggleFirstLaunch(langSet);
      onLocaleChange(langSet);
    });
  });

  if (isFirstLaunch) {
    UltimateNavigator = AppPrimaryContainer;
  }

  return (
    <TranslationProvider locale={locale}>
      <Translation.Consumer>
        {context => (
          <UltimateNavigator
            {...context}
            screenProps={{
              currentLocale: locale,
              onLocaleChange
            }}
          />
        )}
      </Translation.Consumer>
    </TranslationProvider>
  );
};

export default AppLocalised;
