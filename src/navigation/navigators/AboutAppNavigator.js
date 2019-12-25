import React from "react";
import { createStackNavigator } from "react-navigation-stack";
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
    navigationOptions: () => ({
      drawerLabel: translate("topLevelMenu.aboutApp"),
      drawerIcon: () => <Octicons name="issue-opened" size={24} color="black" />,
    }),
    defaultNavigationOptions: ({ navigation }) => ({
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
    })
  }
);

export default AboutAppStackNavigator;
