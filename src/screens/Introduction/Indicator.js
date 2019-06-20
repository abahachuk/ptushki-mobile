import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import {
  FIRST_INTRO_SCREEN,
  SECOND_INTRO_SCREEN,
  THIRD_INTRO_SCREEN,
  FOURTH_INTRO_SCREEN
} from "constants/introductionScreens";
import Circle from "./Circle";
import { styles } from "./styles";

// eslint-disable-next-line no-shadow
const Indicator = ({ selectedIndex }) => (
  <View style={styles.indicatorContainer}>
    {[
      FIRST_INTRO_SCREEN,
      SECOND_INTRO_SCREEN,
      THIRD_INTRO_SCREEN,
      FOURTH_INTRO_SCREEN
    ].map(index => (
      <Circle key={index} selected={selectedIndex === index} />
    ))}
  </View>
);

Indicator.propTypes = {
  selectedIndex: PropTypes.string.isRequired
};

export default Indicator;
