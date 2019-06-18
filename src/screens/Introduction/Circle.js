import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { styles } from "./styles";

const Circle = ({ selected }) => (
  <View style={selected ? styles.circleSelected : styles.circle} />
);

Circle.propTypes = {
  selected: PropTypes.bool.isRequired
};

export default Circle;
