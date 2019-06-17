import { createStackNavigator } from "react-navigation";
import { LanguageSelect } from "../../screens";
import IntroSlidesNavigator from './IntroSlidesNavigator';

const IntroductionNavigator = createStackNavigator(
  {
    languageSelect: {
      screen: LanguageSelect
    },
    IntroSlidesNavigator
  }
);

export default IntroductionNavigator;
