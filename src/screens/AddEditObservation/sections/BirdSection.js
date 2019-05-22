import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import getDescriptionBlock from "./DescriptionBlock";
import { translate } from "../../../i18n";
import { styles } from "../styles";
import { pickerValuesArrayType } from "../../../propTypes";
import { CustomPicker } from "../../../components";

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
        caption={translate("editObservation.birdSpecies")}
        wrappedStyles={styles.firstBirdPicker}
        selectedValue={birdSpecies}
        onValueChange={itemValue => setFieldValue({ birdSpecies: itemValue })}
        items={birdSpeciesValues}
      />
      <CustomPicker
        caption={translate("editObservation.birdSex")}
        wrappedStyles={styles.restBirdPickers}
        selectedValue={birdSex}
        onValueChange={itemValue => setFieldValue({ birdSex: itemValue })}
        items={birdSexValues}
      />
      <CustomPicker
        caption={translate("editObservation.birdAge")}
        wrappedStyles={styles.restBirdPickers}
        selectedValue={birdAge}
        onValueChange={itemValue => setFieldValue({ birdAge: itemValue })}
        items={birdAgeValues}
      />
      <CustomPicker
        caption={translate("editObservation.birdWas")}
        wrappedStyles={styles.restBirdPickers}
        selectedValue={birdObstacles}
        onValueChange={itemValue => setFieldValue({ birdObstacles: itemValue })}
        items={birdObstaclesValues}
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
