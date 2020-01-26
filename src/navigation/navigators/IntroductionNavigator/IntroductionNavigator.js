import { createStackNavigator } from 'react-navigation-stack';
import { LanguageSelect, Introduction } from '../../../screens';
import { INTRODUCTION_STACK_ROUTE } from './constants';

const IntroductionNavigator = createStackNavigator(
  {
    LanguageSelect,
    [INTRODUCTION_STACK_ROUTE]: { screen: Introduction },
  },
  {
    headerMode: 'none',
  },
);

IntroductionNavigator.navigationOptions = {
  header: null,
};

export default IntroductionNavigator;
