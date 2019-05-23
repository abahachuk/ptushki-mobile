import React, { useState } from "react";
import PropTypes from "prop-types";
import { ScrollView, KeyboardAvoidingView, View } from "react-native";
// eslint-disable-next-line import/no-unresolved
import ImagePicker from "react-native-image-picker";

import { styles } from "./styles";
import { Button, Input } from "../../components";
import { translate } from "../../i18n";
import { pickerValuesArrayType } from "../../propTypes";
import BirdSection from "./sections/BirdSection";
import RingsSection from "./sections/RingsSection";
import ObstaclesSection from "./sections/ObstaclesSection";
import Toolbar from "./sections/Toolbar";
import PhotoCarousel from "./sections/PhotoCarousel";

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
    birdPhotosDefault,
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
      dateTimeInaccuracy,
      birdPhotos
    },
    setFieldsValue
  ] = useState({
    birdSpecies: birdSpeciesDefault,
    birdSex: birdSexDefault,
    birdAge: birdAgeDefault,
    birdObstacles: birdObstaclesDefault,
    birdPhotos: birdPhotosDefault,
    country: countryDefault,
    region: regionDefault,
    coordinates: coordinatesDefault,
    comment: commentDefault,
    dateTime: dateTimeDefault,
    dateTimeInaccuracy: dateTimeInaccuracyDefault
  });

  const updateFieldValue = fieldForMerge =>
    setFieldsValue(prevState => ({
      ...prevState,
      ...fieldForMerge
    }));

  const [rings, setRingsValues] = useState(ringsDefaultValues);

  const onSubmitPress = () => {
    props.onSubmit();
  };
  const onBackPress = () => {
    props.navigation.goBack();
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
    ImagePicker.showImagePicker({}, response => {
      if (response.uri) {
        const imgSrc = { uri: response.uri };
        updateFieldValue({ birdPhotos: birdPhotos.concat(imgSrc) });
      }
    });
  };

  return (
    <View style={styles.rootContainer}>
      <Toolbar onBackPress={onBackPress} />
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
            setFieldValue={updateFieldValue}
          />
          <PhotoCarousel
            photos={birdPhotos}
            onLoadPhotoPress={onLoadPhotoPress}
          />
          <RingsSection
            rings={rings}
            ringTypeValues={ringTypeValues}
            ringMaterialValues={ringMaterialValues}
            ringColorValues={ringColorValues}
            ringLocationValues={ringLocationValues}
            setRingsValues={setRingsValues}
          />
          <ObstaclesSection
            onCurrentPositionPress={onCurrentPositionPress}
            onSearchOnMapPress={onSearchOnMapPress}
            country={country}
            setFieldValue={updateFieldValue}
            countryValues={countryValues}
            region={region}
            coordinates={coordinates}
            onCurrentDateTimePress={onCurrentDateTimePress}
            dateTime={dateTime}
            dateTimeInaccuracy={dateTimeInaccuracy}
          />
          <Input
            onChangeText={value => updateFieldValue({ comment: value })}
            customLabel={styles.customLabel}
            customViewStyles={styles.commentField}
            customTextStyles={styles.customText}
            value={comment}
            label={translate("editObservation.comment")}
          />
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

// TODO: update defaultProps to contain isReuiqred where it's need and get
// rid of mocks
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
  birdPhotosDefault: PropTypes.array,
  countryDefault: PropTypes.string,
  countryValues: pickerValuesArrayType,
  regionDefault: PropTypes.string,
  coordinatesDefault: PropTypes.string,
  commentDefault: PropTypes.string,
  dateTimeDefault: PropTypes.string,
  dateTimeInaccuracyDefault: PropTypes.string,
  navigation: PropTypes.shape({ goBack: PropTypes.func }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCurrentPosition: PropTypes.func.isRequired,
  onSearchOnMap: PropTypes.func.isRequired,
  onCurrentDateTime: PropTypes.func.isRequired
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
  ringsDefaultValues: { "1": {} },
  ringTypeValues: [],
  ringMaterialValues: [],
  ringColorValues: [],
  ringLocationValues: [],
  birdPhotosDefault: [],
  countryDefault: "",
  countryValues: [],
  regionDefault: "",
  coordinatesDefault: "",
  commentDefault: "",
  dateTimeDefault: "",
  dateTimeInaccuracyDefault: ""
};

export default EditObservation;
