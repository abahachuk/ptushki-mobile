import React from "react";
import { createStackNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  Observations,
  AddObservation,
  EditObservation,
  ObservationItem,
  ObservationCreated
} from "../../screens";
import { translate } from "../../i18n";
import headerStyles from "./headerStyles";
import ListItemPicker from './../../screens/AddEditObservation/ListItemPicker'

/* eslint react/display-name: 0 */

const ObservationStackNavigator = createStackNavigator(
  {
    Observations: {
      screen: Observations
    },
    ObservationItem: {
      screen: ObservationItem
    },
    AddObservation: {
      screen: AddObservation
    },
    ObservationCreated: {
      screen: ObservationCreated
    },
    EditObservation: {
      screen: EditObservation
    },
    chooseOption: {
      screen: ListItemPicker
    }
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
        ...headerStyles
      };
    }
  }
);

ObservationStackNavigator.navigationOptions = () => ({
  drawerIcon: () => <FontAwesome name="binoculars" size={24} color="black" />,
  drawerLabel: translate("topLevelMenu.observationTitle")
});

export default ObservationStackNavigator;
