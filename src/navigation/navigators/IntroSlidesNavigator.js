import { createStackNavigator } from 'react-navigation-stack';
import {
  FIRST_INTRO_SCREEN,
  SECOND_INTRO_SCREEN,
  THIRD_INTRO_SCREEN,
  FOURTH_INTRO_SCREEN,
} from 'constants/introductionScreens';

import { Introduction } from '../../screens';

// TODO: use createAnimatedSwitchNavigator here: https://reactnavigation.org/docs/en/animated-switch-navigator.html#docsNav
const IntroSlidesNavigator = createStackNavigator(
  {
    [FIRST_INTRO_SCREEN]: {
      screen: Introduction,
      params: { introductionId: FIRST_INTRO_SCREEN },
    },
    [SECOND_INTRO_SCREEN]: {
      screen: Introduction,
      params: { introductionId: SECOND_INTRO_SCREEN },
    },
    [THIRD_INTRO_SCREEN]: {
      screen: Introduction,
      params: { introductionId: THIRD_INTRO_SCREEN },
    },
    [FOURTH_INTRO_SCREEN]: {
      screen: Introduction,
      params: { introductionId: FOURTH_INTRO_SCREEN },
    },
  },
  {
    headerMode: 'none',
  },
);

IntroSlidesNavigator.navigationOptions = {
  header: null,
};

export default IntroSlidesNavigator;
