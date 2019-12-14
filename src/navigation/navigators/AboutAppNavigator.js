import React from "react";
import { createStackNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import { AboutApp } from "../../screens";
import { translate } from "../../i18n";
import headerStyles from "./headerStyles";

const AboutAppStackNavigator = createStackNavigator(
  {
    AboutApp
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
        ),
        title: translate("aboutApp.aboutApp"),
        ...headerStyles
      };
    }
  }
);

AboutAppStackNavigator.navigationOptions = () => ({
  drawerIcon: () => <Octicons name="issue-opened" size={24} color="black" />,
  drawerLabel: translate("topLevelMenu.aboutApp")
});

export default AboutAppStackNavigator;
