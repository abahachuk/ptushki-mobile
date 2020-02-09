/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as colors from 'constants/colors';
import { icons } from 'constants/icons';
import {
  Observations,
  AddObservation,
  EditObservation,
  ObservationItem,
  ObservationCreated,
} from '../../screens';
import { translate } from '../../i18n';
import headerStyles from './headerStyles';
import ListItemPicker from '../../screens/AddEditObservation/ListItemPicker';
import DrawerLabel from '../DrawerLabel';
import DrawerIcon from '../DrawerIcon';

/* eslint react/display-name: 0 */

const ObservationStackNavigator = createStackNavigator(
  {
    Observations: {
      screen: Observations,
    },
    ObservationItem: {
      screen: ObservationItem,
    },
    AddObservation: {
      screen: AddObservation,
    },
    ObservationCreated: {
      screen: ObservationCreated,
    },
    EditObservation: {
      screen: EditObservation,
    },
    chooseOption: {
      screen: ListItemPicker,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            name="md-menu"
            size={24}
            color={colors.white}
            style={{ padding: 15 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
        ...headerStyles,
      };
    },
  },
);

ObservationStackNavigator.navigationOptions = () => ({
  drawerIcon: drawerProps => (
    <DrawerIcon type="FontAwesome" name={icons.binoculars} {...drawerProps} />
  ),
  drawerLabel: drawerProps => (
    <DrawerLabel text={translate('topLevelMenu.observationTitle')} {...drawerProps} />
  ),
});

export default ObservationStackNavigator;
