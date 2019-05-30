import React, { useState } from "react";
import AppNavigator from "./navigation/navigators/AppNavigator";
import TranslationProvider, {
  Translation
} from "./components/TranslationProvider";

const AppContainer = () => {
  const [locale, changeLocale] = useState("ru");

  return (
    <TranslationProvider locale={locale}>
      <Translation.Consumer>
        {context => (
          <AppNavigator
            {...context}
            screenProps={{ onLocaleChange: changeLocale }}
          />
        )}
      </Translation.Consumer>
    </TranslationProvider>
  );
};

export default AppContainer;
