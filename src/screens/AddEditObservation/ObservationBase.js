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
import ObservationService from "../../api/Observation.service";

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
  const service = new ObservationService();

  const sendEditObservation = () => {
    // TODO: change this mock data with props which are changed
    const body = {};
    const id = "43095a71-d0ba-4c79-b772-48513f3c3bb3";

    service
      .editObservations(body, id)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const sendAddObservation = () => {
    // TODO: add here new observation containing all props
    const body = {};

    service
      .addObservations(JSON.stringify(body))
      .then(response => {
        console.log(response);
        props.navigation.navigate("ObservationCreated", {
          birdSpecies,
          dateTime,
          observationLocation: `${country}`,
          birdSex,
          birdAge,
          birdObstacles
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onSubmitPress = () => {
    const { routeName } = props.navigation.state;

    return routeName === "AddObservation"
      ? sendAddObservation()
      : sendEditObservation();
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
  coordinatesDefault: PropTypes.string,
  commentDefault: PropTypes.string,
  dateTimeDefault: PropTypes.string,
  dateTimeInaccuracyDefault: PropTypes.string,
  onCurrentPosition: PropTypes.func,
  onSearchOnMap: PropTypes.func,
  onCurrentDateTime: PropTypes.func,
  navigation: PropTypes.shape({
    state: PropTypes.object,
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
  coordinatesDefault: "",
  commentDefault: "",
  dateTimeDefault: "",
  dateTimeInaccuracyDefault: "",
  onCurrentPosition: () => {},
  onSearchOnMap: () => {},
  onCurrentDateTime: () => {}
};
ObservationBase.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state;
  const title =
    routeName === "AddObservation"
      ? translate("addEditObservation.navHeaderTitleAdd")
      : translate("addEditObservation.navHeaderTitleEdit");

  return {
    title,
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
