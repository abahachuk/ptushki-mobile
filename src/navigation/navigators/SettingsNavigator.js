import React from "react";
import { createStackNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";

import { Settings } from "../../screens";
/* eslint react/display-name: 0 */

const SettingsStackNavigator = createStackNavigator(
  {
    Settings
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            name="md-menu"
            size={24}
            color="white"
            style={{ padding: 15 }}
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
);

SettingsStackNavigator.navigationOptions = {
  drawerIcon: () => <Octicons name="settings" size={24} color="black" />,
  drawerLabel: "Настройки"
};

export default SettingsStackNavigator;
