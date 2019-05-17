import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import React from "react";
import { Button, View, Text } from "react-native";
import { Observations, TopLevelMenu } from "../../screens";

// TODO: replace it with actual component
const Feed = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Наблюдения</Text>
  </View>
);
const Birds = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Птицы</Text>
  </View>
);
const Settings = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Настройки</Text>
  </View>
);

const ObservationStackNavigator = createStackNavigator(
  {
    Observations: {
      screen: Observations
    }
    // TODO: add createObservation and ExistingObservation here
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Button title="Menu" onPress={() => navigation.openDrawer()} />
        )
      };
    }
  }
);

const FeedStackNavigator = createStackNavigator(
  {
    Feed: {
      screen: Feed
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Button title="Menu" onPress={() => navigation.openDrawer()} />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Observations: {
      screen: ObservationStackNavigator
    },
    Feed: {
      screen: FeedStackNavigator
    },
    Birds,
    Settings
  },
  {
    contentComponent: TopLevelMenu
  }
);

export default AppDrawerNavigator;
