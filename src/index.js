import React, { useState, useEffect } from "react";
import AppNavigator, {AppContainer2} from "./navigation/navigators/AppNavigator";
import TranslationProvider, {
  Translation
} from "./components/TranslationProvider";
import { changeLocale } from "./i18n";
import AsyncStorage from "@react-native-community/async-storage";

const AppContainer = () => {
  const [locale, changeLocaleState] = useState("ru");
  const [isFirstLaunch, toggleFirstLaunch] = useState(true);

  const onLocaleChange = localeKey => {
    changeLocale(localeKey);
    changeLocaleState(localeKey);
  };

  useEffect(() => {
    AsyncStorage.getItem("lang").then(langSet => {
      console.log(langSet);

      toggleFirstLaunch(langSet);
      onLocaleChange(langSet)
    });
  })

  if (isFirstLaunch) {
    return <TranslationProvider locale={locale}>
    <Translation.Consumer>
      {context => (
        <AppContainer2
          {...context}
          screenProps={{
            currentLocale: locale,
            onLocaleChange
          }}
        />
      )}
    </Translation.Consumer>
  </TranslationProvider>
  }

  return (
    <TranslationProvider locale={locale}>
      <Translation.Consumer>
        {context => (
          <AppNavigator
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

export default AppContainer;
