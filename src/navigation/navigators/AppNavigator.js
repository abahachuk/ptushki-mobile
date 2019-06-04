import { createAppContainer, createSwitchNavigator } from "react-navigation";
import RegistrationNavigator from "./RegistrationNavigator";
import MainPageNavigator from "./MainPageNavigator";
import { LanguageSelect } from "../../screens";

const primaryNavigator = createSwitchNavigator({
  auth: {
    screen: RegistrationNavigator
  },
  mainPage: {
    screen: MainPageNavigator
  }
});

const extendedNavigator = createSwitchNavigator({
  languageSelect: {
    screen: LanguageSelect
  },
  primaryNavigator
});

export const AppPrimaryContainer = createAppContainer(primaryNavigator);
export const AppExtendedContainer = createAppContainer(extendedNavigator);
