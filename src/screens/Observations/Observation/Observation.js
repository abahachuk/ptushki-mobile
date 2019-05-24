import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const img = require("./mockData/bird.jpg");

const Observation = props => {
  const { species, ringNumber, country, date } = props;

  return (
    <TouchableOpacity style={styles.observation} onPress={props.showObservation}>
      <Text style={styles.species}>{species}</Text>
      <View style={styles.ringNumberWrap}>
        <Text style={styles.ringNumber}>{ringNumber}</Text>
      </View>
      <View style={styles.images}>
        <Image style={styles.image} source={img} />
      </View>
      <Text style={styles.country}>{country}</Text>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
};

Observation.propTypes = {
  species: PropTypes.string,
  ringNumber: PropTypes.string,
  country: PropTypes.string,
  date: PropTypes.string
};
Observation.defaultProps = {
  species: "",
  ringNumber: "",
  country: "",
  date: ""
};

export default Observation;
