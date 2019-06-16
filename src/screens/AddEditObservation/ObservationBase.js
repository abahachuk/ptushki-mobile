import React, { useState } from "react";
import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { translate } from "../../i18n";
import { styles } from "./styles";
import { Button } from "../../components";
import { pickerValuesArrayType } from "../../propTypes";
import {
  BirdSection,
  RingsSection,
  ObstaclesSection,
  PhotoCarousel,
  DeclineChangesPopup
} from "./sections";

const ObservationBase = props => {
  const {
    submitButtonText,
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
    dateTimeInaccuracyDefault,
    navigation
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
    // TODO: make api call to create observation
    props.navigation.navigate("ObservationCreated", {
      birdSpecies,
      dateTime,
      observationLocation: `${country} ${region}`,
      birdSex,
      birdAge,
      birdObstacles
    });
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

  const onCancel = () => {
    navigation.setParams({ isDeclineChangesPopupOpened: false });
  };

  const onExit = () => {
    navigation.setParams({ isDeclineChangesPopupOpened: false });
    navigation.goBack();
  };
  return (
    <View style={styles.rootContainer}>
      {navigation.state.params &&
      navigation.state.params.isDeclineChangesPopupOpened ? (
        <DeclineChangesPopup
          onExitHandler={onExit}
          onCancelHandler={onCancel}
        />
      ) : null}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
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
            updateFieldValue={updateFieldValue}
            birdPhotos={birdPhotos}
            setFieldValue={updateFieldValue}
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
            comment={comment}
          />
          <Button
            wrapperStyles={styles.submitButton}
            onPress={onSubmitPress}
            appearance="Dark"
            caption={submitButtonText}
          />
        </View>
      </ScrollView>
    </View>
  );
};

ObservationBase.propTypes = {
  submitButtonText: PropTypes.string,
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
  onCurrentPosition: PropTypes.func,
  onSearchOnMap: PropTypes.func,
  onCurrentDateTime: PropTypes.func,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func
  }).isRequired
};
ObservationBase.defaultProps = {
  submitButtonText: "",
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
  dateTimeInaccuracyDefault: "",
  onCurrentPosition: () => {},
  onSearchOnMap: () => {},
  onCurrentDateTime: () => {}
};
ObservationBase.navigationOptions = ({ navigation }) => {
  return {
    title: translate("addEditObservation.navHeaderTitleEdit"),
    headerLeft: (
      <Icon
        name="arrowleft"
        size={30}
        color="white"
        style={{ padding: 15 }}
        onPress={() =>
          navigation.setParams({ isDeclineChangesPopupOpened: true })
        }
      />
    )
  };
};

export default ObservationBase;