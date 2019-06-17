import { createAppContainer, createSwitchNavigator } from "react-navigation";
import RegistrationNavigator from "./RegistrationNavigator";
import MainPageNavigator from "./MainPageNavigator";
import IntroductionNavigator from "./IntroductionNavigator";

const primaryNavigator = createSwitchNavigator({
  auth: {
    screen: RegistrationNavigator
  },
  mainPage: {
    screen: MainPageNavigator
  }
});

const extendedNavigator = createSwitchNavigator({
  introduction: {
    screen: IntroductionNavigator
  },
  primaryNavigator
});

export const AppPrimaryContainer = createAppContainer(primaryNavigator);
export const AppExtendedContainer = createAppContainer(extendedNavigator);
