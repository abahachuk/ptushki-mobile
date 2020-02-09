import { createDrawerNavigator } from 'react-navigation-drawer';

import * as colors from 'constants/colors';
import { TopLevelMenu } from '../../screens';
import ObservationsNavigator from './ObservationNavigator';
import SettingsNavigator from './SettingsNavigator';
import AboutAppStackNavigator from './AboutAppNavigator';
// import BirdsNavigator from "./BirdsNavigator";

const AppDrawerNavigator = createDrawerNavigator(
  {
    ObservationsNavigator,
    // BirdsNavigator,
    SettingsNavigator,
    AboutAppStackNavigator,
  },
  {
    contentComponent: TopLevelMenu,
    contentOptions: {
      inactiveTintColor: colors.black06,
      activeTintColor: colors.blue,
      activeBackgroundColor: colors.white,
      itemsContainerStyle: {
        paddingBottom: 0,
      },
      itemStyle: {
        height: 40,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
    overlayColor: colors.black032,
  },
);

export default AppDrawerNavigator;
