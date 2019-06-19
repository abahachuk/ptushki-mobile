import React from "react";
import { KeyboardAvoidingView, Text, Linking } from "react-native";
import PropTypes from "prop-types";
import { ListItem } from 'react-native-elements'

import getDescriptionBlock from "./DescriptionBlock";
import { translate } from "../../../i18n";
import { styles } from "../styles";
import { pickerValuesArrayType } from "../../../propTypes";

const birdsGuideAppLink = "market://details?id=com.apbbirdsguide.app";

const BirdSectionEdit = props => {
  const {
    birdSpecies,
    birdSex,
    birdAge,
    birdObstacles,
    navigation
  } = props;
  console.log(props)

  const onOpenBirdsGuideApp = () => {
    Linking.openURL(birdsGuideAppLink);
  };

  const getItem = (title, subtitle, mod) => {
    return (
      <ListItem
        title={title}
        subtitle={subtitle}
        onPress={() => {
          navigation.navigate('chooseOption', {
            birdSpecies,
            mod
          })
        }}
        chevronColor="black"
        chevron
      />

    )
  }

  return (
    <KeyboardAvoidingView>
      {getDescriptionBlock(
        translate("addEditObservation.birdHeader"),
        translate("addEditObservation.birdDescription")
      )}
      {/* <ListItem
        title="Тип птицы"
        subtitle={birdSpecies}
        onPress={() => {
          navigation.navigate('chooseOption', {
            birdSpecies,
            mod: 'birdSpecies'
          })
        }}
        chevronColor="black"
        chevron
      /> */}
      {getItem("Bird species", birdSpecies, "birdSpecies")}
      <Text style={styles.appLinkBlock}>
        <Text>{`${translate("addEditObservation.linkToAppFirstPart")} `}</Text>
        <Text style={styles.appLinkBlockLink} onPress={onOpenBirdsGuideApp}>
          {`${translate("addEditObservation.linkToAppSecondPart")} `}
        </Text>
        <Text>{translate("addEditObservation.linkToAppThirdPart")}</Text>
      </Text>
      {/* <ListItem
        title="Полптицы"
        subtitle={birdSex}
        onPress={() => {
          navigation.navigate('chooseOption', {
            birdSex,
            mod: 'birdSex'
          })
        }}
        chevronColor="black"
        chevron
      /> */}
      {getItem("Полптицы", birdSex, "birdSex")}

      {/* <ListItem
        title="Возраст птицы"
        subtitle={birdAgeValues}
        onPress={() => {
          navigation.navigate('chooseOption', {
            birdAge,
            mod: 'birdAge'
          })
        }}
        chevronColor="black"
        chevron
      /> */}
      {getItem("Bird age", birdAge, "birdAge")}

      {/* <ListItem
        title="Птица была птицы"
        subtitle={birdAgeValues}
        onPress={() => {
          navigation.navigate('chooseOption', {
            birdObstacles,
            mod: 'birdObstacles'
          })
        }}
        chevronColor="black"
        chevron
      /> */}
      {getItem("Птица была ", birdObstacles, "birdObstacles")}

    </KeyboardAvoidingView>
  );
};

BirdSectionEdit.propTypes = {
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
BirdSectionEdit.defaultProps = {
  birdSpecies: "",
  birdSpeciesValues: [],
  birdSex: "",
  birdSexValues: [],
  birdAge: "",
  birdAgeValues: [],
  birdObstacles: "",
  birdObstaclesValues: [],
  setFieldValue: () => { }
};

export default BirdSectionEdit;
