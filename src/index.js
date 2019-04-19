import React from "react";
import {default as AppNavigator} from './navigation/navigators/AppNavigator'
import TranslationProvider, {
    Translation
  } from "./components/TranslationProvider";


  const AppContainer = () => {
      return (
          <TranslationProvider locale="ru">
            <Translation.Consumer>
                {context => (
                    <AppNavigator {...context} />
                )}
            </Translation.Consumer>

          </TranslationProvider>
      )
  }

export default AppContainer;