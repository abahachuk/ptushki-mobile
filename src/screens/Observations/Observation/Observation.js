import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const img = require("../../../assets/introduction/gaga.jpg"); // TODO remove after BE include bird image in the response

const Observation = props => {
  const {
    showObservation,
    observationItem: {
      speciesMentioned: { species },
      ring: { identificationNumber },
      placeName,
      date
    }
  } = props;
  return (
    <TouchableOpacity
      style={styles.observation}
      onPress={() => showObservation(props.observationItem)}
    >
      <Text style={styles.species}>{species}</Text>
      <View style={styles.ringNumberWrap}>
        <Text style={styles.ringNumber}>{identificationNumber}</Text>
      </View>
      <View style={styles.images}>
        <Image style={styles.image} source={img} />
      </View>
      <Text style={styles.country}>{placeName}</Text>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
};

export default Observation;
