import React from "react";
import { View, Picker, Text } from "react-native";
import PropTypes from "prop-types";

import { Button, Input } from "../../components";
import getDescriptionBlock from "./DescriptionBlock";
import { translate } from "../../i18n";
import { styles } from "./styles";
import { pickerValuesArrayType } from "./propTypes";

const ObstaclesSection = props => {
  const {
    onCurrentPositionPress,
    onSearchOnMapPress,
    country,
    setFieldValue,
    countryValues,
    region,
    coordinates,
    onCurrentDateTimePress,
    dateTime,
    dateTimeInaccuracy
  } = props;

  return (
    <View>
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
    </View>
  );
};

ObstaclesSection.propTypes = {
  onCurrentPositionPress: PropTypes.func,
  onSearchOnMapPress: PropTypes.func,
  country: PropTypes.string,
  setFieldValue: PropTypes.func,
  countryValues: pickerValuesArrayType,
  region: PropTypes.string,
  coordinates: PropTypes.string,
  onCurrentDateTimePress: PropTypes.func,
  dateTime: PropTypes.string,
  dateTimeInaccuracy: PropTypes.string
};
ObstaclesSection.defaultProps = {
  onCurrentPositionPress: () => {},
  onSearchOnMapPress: () => {},
  country: "",
  setFieldValue: () => {},
  countryValues: [],
  region: "",
  coordinates: "",
  onCurrentDateTimePress: () => {},
  dateTime: "",
  dateTimeInaccuracy: ""
};

export default ObstaclesSection;
