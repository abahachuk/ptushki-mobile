import { createAppContainer, createSwitchNavigator } from "react-navigation";
import RegistrationNavigator from "./RegistrationNavigator";
import MainPageNavigator from "./MainPageNavigator";
import { LanguageSelect } from "../../screens";

const AppSwitchNavigator = createSwitchNavigator({
  languageSelect: {
    screen: LanguageSelect
  },
  auth: {
    screen: RegistrationNavigator
  },
  mainPage: {
    screen: MainPageNavigator
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
