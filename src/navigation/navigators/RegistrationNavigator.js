import { createStackNavigator } from "react-navigation-stack";
import {
  Login,
  Registration,
  PasswordRecovery,
  RegistrationEmailSent,
  AboutApp
} from "../../screens";
import headerStyles from "./headerStyles";
import { translate } from "../../i18n";

const RegistrationNavigator = createStackNavigator({
  login: {
    screen: Login
  },
  registration: {
    screen: Registration
  },
  passwordReset: {
    screen: PasswordRecovery
  },
  passwordResetDone: {
    screen: RegistrationEmailSent
  },
  registrationSuccess: {
    screen: RegistrationEmailSent
  },
  aboutApp: {
    screen: AboutApp,
    navigationOptions: () => ({
      title: translate("aboutApp.aboutApp"),
      ...headerStyles
    })
  }
});

export default RegistrationNavigator;
