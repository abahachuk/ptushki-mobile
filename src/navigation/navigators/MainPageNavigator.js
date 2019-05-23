import { createDrawerNavigator } from "react-navigation";
import { TopLevelMenu } from "../../screens";
import ObservationsNavigator from "./ObservationNavigator";
import SettingsNavigator from "./SettingsNavigator";
import BirdsNavigator from "./BirdsNavigator";

const AppDrawerNavigator = createDrawerNavigator(
  {
    ObservationsNavigator,
    BirdsNavigator,
    SettingsNavigator
  },
  {
    contentComponent: TopLevelMenu
  }
);

export default AppDrawerNavigator;
