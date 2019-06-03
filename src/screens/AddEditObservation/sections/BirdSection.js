import React from "react";
import { KeyboardAvoidingView, Text, Linking } from "react-native";
import PropTypes from "prop-types";

import getDescriptionBlock from "./DescriptionBlock";
import { translate } from "../../../i18n";
import { styles } from "../styles";
import { pickerValuesArrayType } from "../../../propTypes";
import { CustomPicker } from "../../../components";

const birdsGuideAppLink = "market://details?id=com.apbbirdsguide.app";

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

  const onOpenBirdsGuideApp = () => {
    Linking.openURL(birdsGuideAppLink);
  };

  return (
    <KeyboardAvoidingView>
      {getDescriptionBlock(
        translate("addEditObservation.birdHeader"),
        translate("addEditObservation.birdDescription")
      )}
      <CustomPicker
        caption={translate("addEditObservation.birdSpecies")}
        wrappedStyles={styles.firstBirdPicker}
        selectedValue={birdSpecies}
        onValueChange={itemValue => setFieldValue({ birdSpecies: itemValue })}
        items={birdSpeciesValues}
      />
      <Text style={styles.appLinkBlock}>
        <Text>{`${translate("addEditObservation.linkToAppFirstPart")} `}</Text>
        <Text style={styles.appLinkBlockLink} onPress={onOpenBirdsGuideApp}>
          {`${translate("addEditObservation.linkToAppSecondPart")} `}
        </Text>
        <Text>{translate("addEditObservation.linkToAppThirdPart")}</Text>
      </Text>
      <CustomPicker
        caption={translate("addEditObservation.birdSex")}
        wrappedStyles={styles.restBirdPickers}
        selectedValue={birdSex}
        onValueChange={itemValue => setFieldValue({ birdSex: itemValue })}
        items={birdSexValues}
      />
      <CustomPicker
        caption={translate("addEditObservation.birdAge")}
        wrappedStyles={styles.restBirdPickers}
        selectedValue={birdAge}
        onValueChange={itemValue => setFieldValue({ birdAge: itemValue })}
        items={birdAgeValues}
      />
      <CustomPicker
        caption={translate("addEditObservation.birdWas")}
        wrappedStyles={styles.restBirdPickers}
        selectedValue={birdObstacles}
        onValueChange={itemValue => setFieldValue({ birdObstacles: itemValue })}
        items={birdObstaclesValues}
      />
    </KeyboardAvoidingView>
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
