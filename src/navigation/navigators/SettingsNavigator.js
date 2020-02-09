/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { icons } from 'constants/icons';
import DrawerIcon from '../DrawerIcon';
import DrawerLabel from '../DrawerLabel';
import headerStyles from './headerStyles';
import { Settings } from '../../screens';
import { translate } from '../../i18n';
/* eslint react/display-name: 0 */

const SettingsStackNavigator = createStackNavigator(
  {
    Settings,
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
        ...headerStyles,
      };
    },
  },
);

SettingsStackNavigator.navigationOptions = () => ({
  drawerIcon: drawerProps => <DrawerIcon type="Octicons" name={icons.settings} {...drawerProps} />,
  drawerLabel: drawerProps => (
    <DrawerLabel text={translate('topLevelMenu.settings')} {...drawerProps} />
  ),
});

export default SettingsStackNavigator;
