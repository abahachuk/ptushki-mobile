import { createAppContainer, createSwitchNavigator } from "react-navigation";
import RegistrationNavigator from "./RegistrationNavigator";
import MainPageNavigator from "./MainPageNavigator";

const AppSwitchNavigator = createSwitchNavigator({
  login: {
    screen: RegistrationNavigator
  },
  mainPage: {
    screen: MainPageNavigator
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
