import React from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { createStackNavigator } from "react-navigation";
import { translate } from "../../i18n";
import RegistrationNavigator from "./RegistrationNavigator";
/* eslint react/display-name: 0 */

const Logout = createStackNavigator(
  {
    RegistrationNavigator
  },
  {
    defaultNavigationOptions: () => {
      return {
        header: null
      };
    }
  }
);

Logout.navigationOptions = () => ({
  drawerIcon: () => <SimpleLineIcons name="login" size={24} color="black" />,
  drawerLabel: translate("topLevelMenu.exit")
});

export default Logout;
