import React, { useState } from "react";
import AppNavigator from "./navigation/navigators/AppNavigator";
import TranslationProvider, {
  Translation
} from "./components/TranslationProvider";
import { changeLocale } from "./i18n";

const AppContainer = () => {
  const [locale, changeLocaleState] = useState("ru");
  const onLocaleChange = localeKey => {
    changeLocale(localeKey);
    changeLocaleState(localeKey);
  };

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
