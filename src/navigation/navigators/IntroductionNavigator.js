import { createStackNavigator } from "react-navigation";
import { LanguageSelect } from "../../screens";
import IntroSlidesNavigator from './IntroSlidesNavigator';

const IntroductionNavigator = createStackNavigator(
  {
    LanguageSelect,
    IntroSlidesNavigator
  }, {
    headerMode: "none"
  }
);

IntroductionNavigator.navigationOptions = {
header: null
};

export default IntroductionNavigator;
