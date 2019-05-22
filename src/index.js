import React from "react";
import AppNavigator from "./navigation/navigators/AppNavigator";
import TranslationProvider, {
  Translation
} from "./components/TranslationProvider";

const AppContainer = () => {
  return (
    <TranslationProvider locale="be">
      <Translation.Consumer>
        {context => <AppNavigator {...context} />}
      </Translation.Consumer>
    </TranslationProvider>
  );
};

export default AppContainer;
