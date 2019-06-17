import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Circle from './Circle';
import {
    FIRST_INTRO_SCREEN,
    SECOND_INTRO_SCREEN,
    THIRD_INTRO_SCREEN,
    FOURTH_INTRO_SCREEN
    // eslint-disable-next-line import/no-unresolved
  } from "constants/introductionScreens";
// eslint-disable-next-line no-shadow
const Indicator = ({ selectedIndex, styles }) => (
    <View
      style={{
        width: "100%",
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
        ...styles
      }}
    >
      {[
        FIRST_INTRO_SCREEN,
        SECOND_INTRO_SCREEN,
        THIRD_INTRO_SCREEN,
        FOURTH_INTRO_SCREEN
      ].map(index => (
        <Circle
          key={index}
          styles={{
            marginRight: 5
          }}
          selected={selectedIndex === index}
        />
      ))}
    </View>
  );
  
  Indicator.propTypes = {
    selectedIndex: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired
  };

  export default Indicator;