import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Splash from "../../screens/Splash";
import RegistrationNavigator from "./RegistrationNavigator";
import MainPageNavigator from "./MainPageNavigator";
import IntroductionNavigator from "./IntroductionNavigator";

const extendedNavigator = createSwitchNavigator({
  splash: {
    screen: Splash
  },
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

const AppExtendedContainer = createAppContainer(extendedNavigator);

export default AppExtendedContainer;
