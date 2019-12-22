import { createStackNavigator } from "react-navigation";
import {
  Login,
  Registration,
  PasswordRecovery,
  RegistrationEmailSent,
  AboutApp,
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
  // TODO remove that after PR About App
  // aboutApp: {
  //   screen: AboutApp,
  //   navigationOptions: () => ({
  //     title: translate("aboutApp.aboutApp"),
  //     ...headerStyles
  //   })
  // }
});

export default RegistrationNavigator;
