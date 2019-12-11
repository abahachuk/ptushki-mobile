import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Splash from "../../screens/Splash";
import RegistrationNavigator from "./RegistrationNavigator";
import MainPageNavigator from "./MainPageNavigator";
import IntroductionNavigator from "./IntroductionNavigator";

export default createAppContainer(
  createSwitchNavigator({
    Splash,
    auth: {
      screen: RegistrationNavigator
    },
    mainPage: {
      screen: MainPageNavigator
    },
    introduction: {
      screen: IntroductionNavigator
    }
  })
);
