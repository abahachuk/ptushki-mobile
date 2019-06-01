import { createStackNavigator } from "react-navigation";
import {
  FIRST_INTRO_SCREEN,
  SECOND_INTRO_SCREEN,
  THIRD_INTRO_SCREEN,
  FOURTH_INTRO_SCREEN
  // eslint-disable-next-line import/no-unresolved
} from "constants/introductionScreens";

import { Introduction, LanguageSelect } from "../../screens";

const IntroductionNavigator = createStackNavigator(
  {
    languageSelect: {
      screen: LanguageSelect
    },
    first: {
      screen: Introduction,
      params: { introductionId: FIRST_INTRO_SCREEN }
    },
    second: {
      screen: Introduction,
      params: { introductionId: SECOND_INTRO_SCREEN }
    },
    third: {
      screen: Introduction,
      params: { introductionId: THIRD_INTRO_SCREEN }
    },
    fourth: {
      screen: Introduction,
      params: { introductionId: FOURTH_INTRO_SCREEN }
    }
  },
  {
    headerMode: "none"
  }
);

export default IntroductionNavigator;
