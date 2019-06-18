import React from "react";
import PropTypes from "prop-types";
import { Text, View, Picker } from "react-native";

import { styles } from "./styles";
import { pickerValuesArrayType } from "../../propTypes";

const CustomPicker = props => {
  const { items, onValueChange, selectedValue, caption, wrappedStyles } = props;

  return (
    <View style={[styles.container, wrappedStyles]}>
      <Text style={styles.caption}>{caption}</Text>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
        {items.map(item => (
          <Picker.Item
            style={styles.pickerItem}
            key={item.id}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    </View>
  );
};

CustomPicker.propTypes = {
  items: pickerValuesArrayType,
  onValueChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
  caption: PropTypes.string,
  wrappedStyles: PropTypes.object
};
CustomPicker.defaultProps = {
  items: [],
  selectedValue: "",
  caption: "",
  wrappedStyles: {}
};

export default CustomPicker;
