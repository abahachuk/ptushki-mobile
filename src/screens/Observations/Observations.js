import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import Observation from "./Observation";
import { styles } from "./styles";

import { observations } from "./Observation/mockData/mockObservations";

const Observations = () => {
  // const { observations }  = props;

  renderItem = ({ item }) => {
    return <Observation {...item} />;
  };
  addObservation = () => {};
  keyExtractor = (item, index) => item.id;

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={observations}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
      <TouchableOpacity
        style={styles.addObservation}
        onPress={this.addObservation}
      >
        <Text style={styles.buttonTextStyle}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Observations;
