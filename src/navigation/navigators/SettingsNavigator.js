import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

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
  drawerIcon: () => <Octicons name="settings" size={24} color="black" />,
  drawerLabel: translate('topLevelMenu.settings'),
});

export default SettingsStackNavigator;
