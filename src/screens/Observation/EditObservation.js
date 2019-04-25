import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  View,
  TouchableHighlight
} from "react-native";

import { styles } from "./styles";
import { Button, Input } from "../../components";
import { translate } from "../../i18n";
import { pickerValuesArrayType } from "./propTypes";
import BirdSection from "./BirdSection";
import RingsSection from "./RingsSection";
import ObstaclesSection from "./ObstaclesSection";

const backIcon = require("../../assets/arrow-pointing-to-left.png");
const photoPlaceholder = require("../../assets/photoPlaceholder.png");

const getEmptyPickerValue = () => {
  return {
    label: "",
    value: ""
  };
};

const EditObservation = props => {
  const {
    birdSpeciesDefault,
    birdSpeciesValues,
    birdSexDefault,
    birdSexValues,
    birdAgeDefault,
    birdAgeValues,
    birdObstaclesDefault,
    birdObstaclesValues,
    ringsDefaultValues,
    ringTypeValues,
    ringMaterialValues,
    ringColorValues,
    ringLocationValues,
    birdPhotos,
    countryDefault,
    countryValues,
    regionDefault,
    coordinatesDefault,
    commentDefault,
    dateTimeDefault,
    dateTimeInaccuracyDefault
  } = props;
  const [
    {
      birdSpecies,
      birdSex,
      birdAge,
      birdObstacles,
      country,
      region,
      coordinates,
      comment,
      dateTime,
      dateTimeInaccuracy
    },
    setFieldValue
  ] = useState({
    birdSpecies: birdSpeciesDefault,
    birdSex: birdSexDefault,
    birdAge: birdAgeDefault,
    birdObstacles: birdObstaclesDefault,
    country: countryDefault,
    region: regionDefault,
    coordinates: coordinatesDefault,
    comment: commentDefault,
    dateTime: dateTimeDefault,
    dateTimeInaccuracy: dateTimeInaccuracyDefault
  });

  const { rings, setRingsValues } = useState(ringsDefaultValues);

  const onSubmitPress = () => {
    props.onSubmit();
  };
  const onBackPress = () => {
    props.onBackNavigation();
  };
  const onCurrentPositionPress = () => {
    props.onCurrentPosition();
  };
  const onSearchOnMapPress = () => {
    props.onSearchOnMap();
  };
  const onCurrentDateTimePress = () => {
    props.onCurrentDateTime();
  };
  const onLoadPhotoPress = () => {
    props.onLoadPhoto();
  };

  const getNewRingId = () => `${Object.keys(rings).length + 1}`;
  const getEmptyRingFieldsGroup = () => {
    return {
      type: getEmptyPickerValue(),
      material: getEmptyPickerValue(),
      color: getEmptyPickerValue(),
      location: getEmptyPickerValue(),
      tagId: ""
    };
  };
  const onAddOneMoreRing = () => {
    setRingsValues(
      Object.assign({}, rings, {
        [getNewRingId()]: getEmptyRingFieldsGroup()
      })
    );
  };

  return (
    <View>
      <View style={styles.toolbar}>
        <TouchableHighlight style={styles.backButton} onPress={onBackPress}>
          <Image source={backIcon} />
        </TouchableHighlight>
        <Text style={styles.toolbarTitle}>
          {translate("editObservation.editing")}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        enabled
      >
        <KeyboardAvoidingView style={styles.container} enabled>
          <BirdSection
            birdSpecies={birdSpecies}
            birdSpeciesValues={birdSpeciesValues}
            birdSex={birdSex}
            birdSexValues={birdSexValues}
            birdAge={birdAge}
            birdAgeValues={birdAgeValues}
            birdObstacles={birdObstacles}
            birdObstaclesValues={birdObstaclesValues}
            setFieldValue={setFieldValue}
          />
          <ScrollView horizontal>
            {birdPhotos.map(photoPath => (
              <Image
                style={styles.birdPhoto}
                key={photoPath}
                source={photoPath}
              />
            ))}
            <TouchableHighlight onPress={onLoadPhotoPress}>
              <Image style={styles.birdPhoto} source={photoPlaceholder} />
            </TouchableHighlight>
          </ScrollView>
          <RingsSection
            rings={rings}
            ringTypeValues={ringTypeValues}
            ringMaterialValues={ringMaterialValues}
            ringColorValues={ringColorValues}
            ringLocationValues={ringLocationValues}
            onAddOneMoreRing={onAddOneMoreRing}
          />
          <ObstaclesSection
            onCurrentPositionPress={onCurrentPositionPress}
            onSearchOnMapPress={onSearchOnMapPress}
            country={country}
            setFieldValue={setFieldValue}
            countryValues={countryValues}
            region={region}
            coordinates={coordinates}
            onCurrentDateTimePress={onCurrentDateTimePress}
            dateTime={dateTime}
            dateTimeInaccuracy={dateTimeInaccuracy}
          />
          <Input wrapperStyles={styles.commentField} value={comment} />
          <Button
            onPress={onSubmitPress}
            appearance="Dark"
            caption={translate("editObservation.sendObservation")}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

EditObservation.propTypes = {
  birdSpeciesDefault: PropTypes.string,
  birdSpeciesValues: pickerValuesArrayType,
  birdSexDefault: PropTypes.string,
  birdSexValues: pickerValuesArrayType,
  birdAgeDefault: PropTypes.string,
  birdAgeValues: pickerValuesArrayType,
  birdObstaclesDefault: PropTypes.string,
  birdObstaclesValues: pickerValuesArrayType,
  ringsDefaultValues: PropTypes.object,
  ringTypeValues: pickerValuesArrayType,
  ringMaterialValues: pickerValuesArrayType,
  ringColorValues: pickerValuesArrayType,
  ringLocationValues: pickerValuesArrayType,
  birdPhotos: PropTypes.array,
  countryDefault: PropTypes.string,
  countryValues: pickerValuesArrayType,
  regionDefault: PropTypes.string,
  coordinatesDefault: PropTypes.string,
  commentDefault: PropTypes.string,
  dateTimeDefault: PropTypes.string,
  dateTimeInaccuracyDefault: PropTypes.string,
  onBackNavigation: PropTypes.func,
  onSubmit: PropTypes.func,
  onCurrentPosition: PropTypes.func,
  onSearchOnMap: PropTypes.func,
  onCurrentDateTime: PropTypes.func,
  onLoadPhoto: PropTypes.func
};
EditObservation.defaultProps = {
  birdSpeciesDefault: "",
  birdSpeciesValues: [],
  birdSexDefault: "",
  birdSexValues: [],
  birdAgeDefault: "",
  birdAgeValues: [],
  birdObstaclesDefault: "",
  birdObstaclesValues: [],
  ringsDefaultValues: {},
  ringTypeValues: [],
  ringMaterialValues: [],
  ringColorValues: [],
  ringLocationValues: [],
  birdPhotos: [],
  countryDefault: "",
  countryValues: [],
  regionDefault: "",
  coordinatesDefault: "",
  commentDefault: "",
  dateTimeDefault: "",
  dateTimeInaccuracyDefault: "",
  onBackNavigation: () => {},
  onSubmit: () => {},
  onCurrentPosition: () => {},
  onSearchOnMap: () => {},
  onCurrentDateTime: () => {},
  onLoadPhoto: () => {}
};

export default EditObservation;
