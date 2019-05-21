import React from "react";
import { createStackNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Observations } from "../../screens";

/* eslint react/display-name: 0 */

const ObservationStackNavigator = createStackNavigator(
  {
    Observations: {
      screen: Observations
    }
    // TODO: add createObservation and ExistingObservation here
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

ObservationStackNavigator.navigationOptions = {
  drawerIcon: () => <FontAwesome name="binoculars" size={24} color="black" />,
  drawerLabel: "Наблюдения"
};

export default ObservationStackNavigator;
