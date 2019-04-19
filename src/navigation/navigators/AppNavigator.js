import { createAppContainer, createStackNavigator } from "react-navigation";
import {
  Login,
  Registration,
  PasswordRecovery,
  RegistrationEmailSent
} from "../../screens";
import { mainPageScreen } from "../../screens/placeholders";

const AppNavigator = createStackNavigator(
  {
    login: Login,
    registration: Registration,
    passwordReset: PasswordRecovery,
    passwordResetDone: {
      screen: RegistrationEmailSent
    },
    registrationSuccess: RegistrationEmailSent,
    mainPage: mainPageScreen
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
