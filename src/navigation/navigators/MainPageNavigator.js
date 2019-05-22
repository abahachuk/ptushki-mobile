import { createDrawerNavigator } from "react-navigation";
import { TopLevelMenu } from "../../screens";
import ObservationsNavigator from "./ObservationNavigator";
import SettingsNavigator from "./SettingsNavigator";
import BirdsNavigator from "./BirdsNavigator";
import LogoutNavigator from "./LogoutNavigator";

const AppDrawerNavigator = createDrawerNavigator(
  {
    ObservationsNavigator,
    BirdsNavigator,
    SettingsNavigator,
    LogoutNavigator
  },
  {
    contentComponent: TopLevelMenu
  }
);

export default AppDrawerNavigator;
