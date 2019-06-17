import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { styles } from "./styles";

// eslint-disable-next-line no-shadow
const Circle = ({ selected, styles }) => (
    <View
      style={{
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        backgroundColor: selected ? "#fff" : "none",
        borderWidth: 1,
        borderColor: "#fff",
        zIndex: 100,
        ...styles
      }}
    />
  );
  
  Circle.propTypes = {
    selected: PropTypes.bool.isRequired,
    styles: PropTypes.object.isRequired
  };

  export default Circle;