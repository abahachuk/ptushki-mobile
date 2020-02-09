/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { icons } from 'constants/icons';
import DrawerIcon from '../DrawerIcon';
import DrawerLabel from '../DrawerLabel';
import { AboutApp } from '../../screens';
import { translate } from '../../i18n';
import headerStyles from './headerStyles';

const AboutAppStackNavigator = createStackNavigator(
  {
    AboutApp,
  },
  {
    navigationOptions: () => ({
      drawerIcon: drawerProps => (
        <DrawerIcon type="Octicons" name={icons.issueOpened} {...drawerProps} />
      ),
      drawerLabel: drawerProps => (
        <DrawerLabel text={translate('topLevelMenu.aboutApp')} {...drawerProps} />
      ),
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
      title: translate('aboutApp.aboutApp'),
      ...headerStyles,
    }),
  },
);

export default AboutAppStackNavigator;
