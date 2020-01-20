import { createDrawerNavigator } from "react-navigation-drawer";
import { TopLevelMenu } from "../../screens";
import ObservationsNavigator from "./ObservationNavigator";
import SettingsNavigator from "./SettingsNavigator";
import AboutAppStackNavigator from "./AboutAppNavigator";
// import BirdsNavigator from "./BirdsNavigator";

const AppDrawerNavigator = createDrawerNavigator(
  {
    ObservationsNavigator,
    // BirdsNavigator,
    SettingsNavigator,
    AboutAppStackNavigator
  },
  {
    contentComponent: TopLevelMenu
  }
);

export default AppDrawerNavigator;
