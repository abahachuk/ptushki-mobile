import { createStackNavigator } from "react-navigation";
import { LanguageSelect } from "../../screens";
import { Introduction } from "../../screens";

const IntroductionNavigator = createStackNavigator(
  {
    LanguageSelect,
    Introduction
  },
  {
    headerMode: "none"
  }
);

IntroductionNavigator.navigationOptions = {
  header: null
};

export default IntroductionNavigator;
