import { createStackNavigator } from "react-navigation";
import {
  Login,
  Registration,
  PasswordRecovery,
  RegistrationEmailSent
} from "../../screens";

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
  }
});

export default RegistrationNavigator;
