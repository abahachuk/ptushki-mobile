import { createAppContainer, createStackNavigator } from "react-navigation";
import { Login, Registration } from "./screens";
import {
  registrationSuccessScreen,
  passwordResetScreen,
  passwordResetDoneScreen,
  mainPageScreen
} from "./screens/placeholders";

// createStackNavigator fails intermittently, investigating https://github.com/kmagiera/react-native-gesture-handler/issues/538
const AppNavigator = createStackNavigator(
  {
    login: Login,
    registration: Registration,
    registrationSuccess: registrationSuccessScreen,
    passwordReset: passwordResetScreen,
    passwordResetDone: passwordResetDoneScreen,
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
