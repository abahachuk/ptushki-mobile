import React from "react";
import { createStackNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";
import { Observations } from "../../screens";
import { translate } from "../../i18n";

/* eslint react/display-name: 0 */
const birdImg = require("./../../assets/bird/bird.png");

const BirdsStackNavigator = createStackNavigator(
  {
    Observations: {
      screen: Observations
    }
    // TODO: figure out how to use Observation for all birds AND for separate group of birds
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            name="md-menu"
            size={24}
            color="black"
            style={{ padding: 15 }}
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
);

BirdsStackNavigator.navigationOptions = () => ({
  drawerIcon: () => <Image resizeMode="contain" source={birdImg} />,
  drawerLabel: translate("topLevelMenu.birds")
});

export default BirdsStackNavigator;
