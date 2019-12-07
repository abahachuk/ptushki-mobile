import React, { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationActions } from "react-navigation";

import AppExtendedContainer from "./navigation/navigators/AppNavigator";

import TranslationProvider, {
  Translation
} from "./components/TranslationProvider";
import { changeLocale } from "./i18n";

const AppLocalised = () => {
  const [currentLocale, changeLocaleState] = useState("ru");
  const navigator = useRef(null);
  const onLocaleChange = localeKey => {
    changeLocale(localeKey);
    changeLocaleState(localeKey);
  };

  useEffect(() => {
    AsyncStorage.getItem("lang").then(langSet => {
      let initialRoute = "introduction";
      if (langSet) {
        onLocaleChange(langSet);
        initialRoute = "auth";
      }

      navigator.current.dispatch(
        NavigationActions.navigate({ routeName: initialRoute })
      );
    });
  }, []);

  return (
    <TranslationProvider locale={currentLocale}>
      <Translation.Consumer>
        {context => (
          <AppExtendedContainer
            ref={navigator}
            {...context}
            screenProps={{
              currentLocale,
              onLocaleChange
            }}
          />
        )}
      </Translation.Consumer>
    </TranslationProvider>
  );
};

export default AppLocalised;
