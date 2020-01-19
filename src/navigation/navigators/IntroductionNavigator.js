import { createStackNavigator } from 'react-navigation-stack';
import { LanguageSelect, Introduction } from '../../screens';

const IntroductionNavigator = createStackNavigator(
  {
    LanguageSelect,
    Introduction,
  },
  {
    headerMode: 'none',
  },
);

IntroductionNavigator.navigationOptions = {
  header: null,
};

export default IntroductionNavigator;
