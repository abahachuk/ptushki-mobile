import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Picker,
  Image,
  View
} from "react-native";

import { styles } from "./styles";
import { Button, Input } from "../../components";
import { translate } from "../../i18n";
import backIcon from "../../assets/arrow-pointing-to-left.png";
import photoPlaceholder from "../../assets/photoPlaceholder.png";

const pickerValueType = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.string
});
const pickerValuesArrayType = PropTypes.arrayOf(pickerValueType);

const getDescriptionBlock = (headerText, descriptionText) => (
  <View>
    <Text style={styles.headerText}>{headerText}</Text>
    <Text style={styles.descriptionText}>{descriptionText}</Text>
  </View>
);

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
        <Button style={styles.backButton} onPress={onBackPress}>
          <Image source={backIcon} />
        </Button>
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
          {getDescriptionBlock(
            translate("editObservation.birdHeader"),
            translate("editObservation.birdDescription")
          )}
          <Picker
            style={styles.picker}
            selectedValue={birdSpecies}
            onValueChange={itemValue =>
              setFieldValue({ birdSpecies: itemValue })
            }
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
          <ScrollView horizontal>
            {birdPhotos.map(photoPath => (
              <Image style={styles.birdPhoto} key={photoPath} src={photoPath} />
            ))}
            <Image style={styles.birdPhoto} src={photoPlaceholder} />
          </ScrollView>
          {getDescriptionBlock(
            translate("editObservation.ringHeader"),
            translate("editObservation.ringDescription")
          )}
          {Object.keys(rings)
            .sort((a, b) => (+a < +b ? -1 : 1))
            .map(ringKey => {
              const {
                type: ringType,
                material: ringMaterial,
                color: ringColor,
                location: ringLocation,
                tagId: ringTagId
              } = rings[ringKey];
              const onPickerValueChange = itemValue =>
                setRingsValues(
                  Object.assign({}, rings, {
                    [`${ringKey}`]: Object.assign({}, rings[`${ringKey}`], {
                      type: itemValue
                    })
                  })
                );
              return (
                <View key={ringKey}>
                  <Text>
                    {`${translate("editObservation.ring")} ${+ringKey}`}
                  </Text>
                  <Picker
                    style={styles.picker}
                    selectedValue={ringType}
                    onValueChange={onPickerValueChange}
                  >
                    {ringTypeValues.map(ringTypeItem => (
                      <Picker.Item
                        key={ringTypeItem.value}
                        label={ringTypeItem.label}
                        value={ringTypeItem.value}
                      />
                    ))}
                  </Picker>
                  <Picker
                    style={styles.picker}
                    selectedValue={ringMaterial}
                    onValueChange={onPickerValueChange}
                  >
                    {ringMaterialValues.map(ringMaterialItem => (
                      <Picker.Item
                        key={ringMaterialItem.value}
                        label={ringMaterialItem.label}
                        value={ringMaterialItem.value}
                      />
                    ))}
                  </Picker>
                  <Picker
                    style={styles.picker}
                    selectedValue={ringColor}
                    onValueChange={onPickerValueChange}
                  >
                    {ringColorValues.map(ringColorItem => (
                      <View key={ringColorItem.value}>
                        <Picker.Item
                          label={ringColorItem.label}
                          value={ringColorItem.value}
                        />
                        <View
                          style={[
                            styles.colorPatch,
                            { backgroundColor: ringColorItem.value }
                          ]}
                        />
                      </View>
                    ))}
                  </Picker>
                  <Picker
                    style={styles.picker}
                    selectedValue={ringLocation}
                    onValueChange={onPickerValueChange}
                  >
                    {ringLocationValues.map(ringLocationItem => (
                      <Picker.Item
                        key={ringLocationItem.value}
                        label={ringLocationItem.label}
                        value={ringLocationItem.value}
                      />
                    ))}
                  </Picker>
                  <Input value={ringTagId} />
                </View>
              );
            })}
          <View style={styles.oneMoreRingButtonContainer}>
            <Button onPress={onAddOneMoreRing} appearance="Light">
              {translate("editObservation.oneMoreRing")}
            </Button>
          </View>
          {getDescriptionBlock(
            translate("editObservation.obstaclesHeader"),
            translate("editObservation.obstaclesDescription")
          )}
          <Text style={styles.smallHeaderText}>
            {translate("editObservation.place")}
          </Text>
          <View style={styles.geolocationButtons}>
            <Button onPress={onCurrentPositionPress} appearance="Borderless">
              {translate("editObservation.currentGeoposition")}
            </Button>
            <Button onPress={onSearchOnMapPress} appearance="Borderless">
              {translate("editObservation.searchOnMap")}
            </Button>
          </View>
          <Picker
            style={styles.picker}
            selectedValue={country}
            onValueChange={setFieldValue}
          >
            {countryValues.map(countryItem => (
              <Picker.Item
                key={countryItem.value}
                label={countryItem.label}
                value={countryItem.value}
              />
            ))}
          </Picker>
          <Input value={region} />
          <Input value={coordinates} />
          <Text style={styles.smallHeaderText}>Время</Text>
          <Button onPress={onCurrentDateTimePress} appearance="Borderless">
            {translate("editObservation.currentDateTime")}
          </Button>
          <Input value={dateTime} />
          <Input value={dateTimeInaccuracy} />
          <Input value={comment} />
          <Button onPress={onSubmitPress} appearance="Dark">
            {translate("editObservation.sendObservation")}
          </Button>
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
  onBackNavigation: PropTypes.func.isRequired,
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
  dateTimeInaccuracyDefault: ""
};

export default EditObservation;
