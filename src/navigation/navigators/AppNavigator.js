import { createAppContainer, createStackNavigator } from "react-navigation";
import {
  Login,
  Registration,
  PasswordRecovery,
  RegistrationEmailSent,
  Observations
} from "../../screens";

const AppNavigator = createStackNavigator(
  {
    login: Login,
    registration: Registration,
    passwordReset: PasswordRecovery,
    passwordResetDone: {
      screen: RegistrationEmailSent
    },
    registrationSuccess: RegistrationEmailSent,
    mainPage: Observations
  },
  {
    initialRouteName: "login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
