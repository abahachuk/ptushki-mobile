import React from "react";
import { Text, View, Button } from "react-native";
import DeleteObservation from "./DeleteObservation/DeleteObservation";
import Observations from "./Observations";

// temporary components for navigation flow
/* eslint react/prop-types: 0 */
/* eslint import/prefer-default-export: 0 */

export const mainPageScreen = props => {
  const { navigation } = props;

  return (
    <View>
      <Text>У вас еще нет наблюдений</Text>
      <Text>Самое время добавить</Text>
      <Button
        title="Добавить"
        onPress={() => {
          navigation.navigate("login");
        }}
      />
    </View>
  );
};

mainPageScreen.navigationOptions = {
  title: "Home",
  headerRight: <DeleteObservation />
};
