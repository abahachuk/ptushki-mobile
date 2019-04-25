import React from "react";
import { View, Picker } from "react-native";
import PropTypes from "prop-types";

import getDescriptionBlock from "./DescriptionBlock";
import { translate } from "../../i18n";
import { styles } from "./styles";
import { pickerValuesArrayType } from "./propTypes";

const BirdSection = props => {
  const {
    birdSpecies,
    birdSpeciesValues,
    birdSex,
    birdSexValues,
    birdAge,
    birdAgeValues,
    birdObstacles,
    birdObstaclesValues,
    setFieldValue
  } = props;

  return (
    <View>
      {getDescriptionBlock(
        translate("editObservation.birdHeader"),
        translate("editObservation.birdDescription")
      )}
      <Picker
        style={styles.picker}
        selectedValue={birdSpecies}
        onValueChange={itemValue => setFieldValue({ birdSpecies: itemValue })}
      >
        {birdSpeciesValues.map(birdSpeciesItem => (
          <Picker.Item
            key={birdSpeciesItem.value}
            label={birdSpeciesItem.label}
            value={birdSpeciesItem.value}
          />
        ))}
      </Picker>
      <Picker
        style={styles.picker}
        selectedValue={birdSex}
        onValueChange={itemValue => setFieldValue({ birdSex: itemValue })}
      >
        {birdSexValues.map(birdSexItem => (
          <Picker.Item
            key={birdSexItem.value}
            label={birdSexItem.label}
            value={birdSexItem.value}
          />
        ))}
      </Picker>
      <Picker
        style={styles.picker}
        selectedValue={birdAge}
        onValueChange={itemValue => setFieldValue({ birdAge: itemValue })}
      >
        {birdAgeValues.map(birdAgeItem => (
          <Picker.Item
            key={birdAgeItem.value}
            label={birdAgeItem.label}
            value={birdAgeItem.value}
          />
        ))}
      </Picker>
      <Picker
        style={styles.picker}
        selectedValue={birdObstacles}
        onValueChange={itemValue => setFieldValue({ birdAge: itemValue })}
      >
        {birdObstaclesValues.map(birdObstaclesItem => (
          <Picker.Item
            key={birdObstaclesItem.value}
            label={birdObstaclesItem.label}
            value={birdObstaclesItem.value}
          />
        ))}
      </Picker>
    </View>
  );
};

BirdSection.propTypes = {
  birdSpecies: PropTypes.string,
  birdSpeciesValues: pickerValuesArrayType,
  birdSex: PropTypes.string,
  birdSexValues: pickerValuesArrayType,
  birdAge: PropTypes.string,
  birdAgeValues: pickerValuesArrayType,
  birdObstacles: PropTypes.string,
  birdObstaclesValues: pickerValuesArrayType,
  setFieldValue: PropTypes.func
};
BirdSection.defaultProps = {
  birdSpecies: "",
  birdSpeciesValues: [],
  birdSex: "",
  birdSexValues: [],
  birdAge: "",
  birdAgeValues: [],
  birdObstacles: "",
  birdObstaclesValues: [],
  setFieldValue: () => {}
};

export default BirdSection;
