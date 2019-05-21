import React from "react";
import { createDrawerNavigator } from "react-navigation";
import { View, Text, Image } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { TopLevelMenu } from "../../screens";
import ObservationsNavigator from "./ObservationNavigator";
import SettingsNavigator from "./SettingsNavigator";

const birdImg = require("./../../assets/bird/bird.png");
/* eslint react/display-name: 0 */

// TODO: replace it with actual screens
const Birds = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Птицы</Text>
  </View>
);
Birds.navigationOptions = {
  drawerIcon: () => <Image resizeMode="contain" source={birdImg} />,
  drawerLabel: "Птицы"
};

const Logout = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Logout</Text>
  </View>
);
Logout.navigationOptions = {
  drawerIcon: () => <SimpleLineIcons name="login" size={24} color="black" />,
  drawerLabel: "Выйти"
};

const AppDrawerNavigator = createDrawerNavigator(
  {
    ObservationsNavigator,
    Birds,
    SettingsNavigator,
    Logout
  },
  {
    contentComponent: TopLevelMenu
  }
);

export default AppDrawerNavigator;
