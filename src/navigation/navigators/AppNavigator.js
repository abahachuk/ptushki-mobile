import { createAppContainer, createSwitchNavigator } from "react-navigation";
import RegistrationNavigator from "./RegistrationNavigator";
import MainPageNavigator from "./MainPageNavigator";
import IntroductionNavigator from "./IntroductionNavigator";

const AppSwitchNavigator = createSwitchNavigator({
  introduction: {
    screen: IntroductionNavigator
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
