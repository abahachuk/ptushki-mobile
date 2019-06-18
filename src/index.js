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
  let AppContainer = AppPrimaryContainer;
  const [currentLocale, changeLocaleState] = useState("ru");
  const [isFirstLaunch, setFirstLaunch] = useState(false);
  const onLocaleChange = localeKey => {
    changeLocale(localeKey);
    changeLocaleState(localeKey);
  };

  useEffect(() => {
    AsyncStorage.getItem("lang").then(langSet => {
      if (langSet) {
        onLocaleChange(langSet);
      } else {
        setFirstLaunch(true);
      }
    });
  });

  if (isFirstLaunch) {
    AppContainer = AppExtendedContainer;
  }

  return (
    <TranslationProvider locale={currentLocale}>
      <Translation.Consumer>
        {context => (
          <AppContainer
            {...context}
            screenProps={{
              currentLocale,
              onLocaleChange,
              isFirstLaunch
            }}
          />
        )}
      </Translation.Consumer>
    </TranslationProvider>
  );
};

export default AppLocalised;
