import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import Observation from "./Observation";
import { styles } from "./styles";

import observations from "./Observation/mockData/mockObservations";

const Observations = () => {
  const addObservation = () => {};

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={observations}
        renderItem={({ item }) => <Observation {...item} />}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.addObservation} onPress={addObservation}>
        <Text style={styles.buttonTextStyle}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Observations;
