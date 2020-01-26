import React, { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import AppExtendedContainer from './navigation/navigators/AppNavigator';

import TranslationProvider, { Translation } from './components/TranslationProvider';
import { changeLocale } from './i18n';
import { AppLanguages } from './entities';

const AppLocalised = () => {
  const [currentLocale, changeLocaleState] = useState(AppLanguages.RUSSIAN);
  const navigator = useRef(null);
  const onLocaleChange = localeKey => {
    changeLocale(localeKey);
    changeLocaleState(localeKey);
  };

  useEffect(() => {
    AsyncStorage.getItem('lang').then(langSet => {
      if (langSet) onLocaleChange(langSet);
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
              onLocaleChange,
            }}
          />
        )}
      </Translation.Consumer>
    </TranslationProvider>
  );
};

export default AppLocalised;
