import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import getDescriptionBlock from "./DescriptionBlock";
import { translate } from "../../i18n";
import { styles } from "./styles";
import { pickerValuesArrayType } from "./propTypes";
import { CustomPicker } from "../../components";

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
      <CustomPicker
        wrappedStyles={styles.firstBirdPicker}
        defaultValue={birdSpecies}
        onValueChange={itemValue => setFieldValue({ birdSpecies: itemValue })}
        items={birdSpeciesValues}
        caption="Вид птицы"
      />
      <CustomPicker
        wrappedStyles={styles.restBirdPickers}
        defaultValue={birdSex}
        onValueChange={itemValue => setFieldValue({ birdSex: itemValue })}
        items={birdSexValues}
        caption="Пол"
      />
      <CustomPicker
        wrappedStyles={styles.restBirdPickers}
        defaultValue={birdAge}
        onValueChange={itemValue => setFieldValue({ birdAge: itemValue })}
        items={birdAgeValues}
        caption="Возраст"
      />
      <CustomPicker
        wrappedStyles={styles.restBirdPickers}
        defaultValue={birdObstacles}
        onValueChange={itemValue => setFieldValue({ birdAge: itemValue })}
        items={birdObstaclesValues}
        caption="Птица была"
      />
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
