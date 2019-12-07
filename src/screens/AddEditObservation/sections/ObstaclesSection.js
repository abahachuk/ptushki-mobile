import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconII from "react-native-vector-icons/Ionicons";

import * as colors from "../../../constants/colors";
import { Button, Input, CustomPicker } from "../../../components";
import getDescriptionBlock from "./DescriptionBlock";
import { translate } from "../../../i18n";
import { styles } from "../styles";
import { pickerValuesArrayType } from "../../../propTypes";

const ObstaclesSection = props => {
  const {
    onSearchOnMapPress,
    country,
    setFieldValue,
    countryValues,
    coordinates,
    dateTime,
    dateTimeInaccuracy,
    comment
  } = props;

  const [
    { dateTimeValue, dateTimeInaccuracyValue },
    setDateTimeValue
  ] = useState({
    dateTimeValue: dateTime,
    dateTimeInaccuracyValue: dateTimeInaccuracy
  });
  const [coordinatesValue, setCoordinatesValue] = useState(coordinates);

  const onCurrentPositionPress = () => {
    const coordsSymbolsLimit = 9;

    // eslint-disable-next-line
    navigator.geolocation.getCurrentPosition(value => {
      const longitude = `${value.coords.longitude}`.slice(
        0,
        coordsSymbolsLimit
      );
      const latitude = `${value.coords.latitude}`.slice(0, coordsSymbolsLimit);
      setCoordinatesValue(`${longitude}, ${latitude}`);
    });
  };

  const refineDateTimeValue = value => {
    return `${value < 10 ? `0${value}` : value}`;
  };

  const onCurrentDateTimePress = () => {
    const fullDate = new Date();
    const date = `${refineDateTimeValue(
      fullDate.getDate()
    )}.${refineDateTimeValue(
      fullDate.getMonth() + 1
    )}.${fullDate.getFullYear()}`;
    const time = `${refineDateTimeValue(
      fullDate.getHours()
    )}:${refineDateTimeValue(fullDate.getMinutes())}`;
    const newDateTimeValue = `${date} ${time}`;

    setDateTimeValue({
      dateTimeValue: newDateTimeValue,
      dateTimeInaccuracyValue: translate("addEditObservation.preciseTime")
    });
  };

  return (
    <KeyboardAvoidingView style={styles.obstaclesSectionContainer}>
      {getDescriptionBlock(
        translate("addEditObservation.obstaclesHeader"),
        translate("addEditObservation.obstaclesDescription")
      )}
      <View style={styles.geolocationButtons}>
        <Button
          wrapperStyles={styles.geolocationButton}
          onPress={onSearchOnMapPress}
          caption={translate("addEditObservation.searchOnMap")}
          appearance="Borderless"
        />
        <TouchableOpacity
          style={[styles.buttonWithIcon, styles.currentPosition]}
          onPress={onCurrentPositionPress}
        >
          <IconFA name="map-marker" size={30} color={colors.green} />
          <Text style={styles.buttonWithIconText}>
            {translate("addEditObservation.currentGeoposition")}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>
        {translate("addEditObservation.place")}
      </Text>
      <CustomPicker
        wrappedStyles={styles.countryPicker}
        selectedValue={country}
        onValueChange={itemValue => setFieldValue({ country: itemValue })}
        items={countryValues}
        caption={translate("addEditObservation.country")}
      />
      <Input
        onChangeText={value => setFieldValue({ coordinates: value })}
        wrapperStyles={styles.customInput}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        value={coordinatesValue}
        label={translate("addEditObservation.coordinates")}
      />
      <Text style={styles.sectionTitle}>
        {translate("addEditObservation.time")}
      </Text>
      <TouchableOpacity
        style={[styles.buttonWithIcon, styles.currentDateTimeButton]}
        onPress={onCurrentDateTimePress}
      >
        <IconII name="md-time" size={30} color={colors.green} />
        <Text style={[styles.buttonWithIconText, styles.currentDateTimeText]}>
          {translate("addEditObservation.currentDateTime")}
        </Text>
      </TouchableOpacity>
      <Input
        onChangeText={value => setFieldValue({ dateTime: value })}
        wrapperStyles={styles.customInput}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        value={dateTimeValue}
        label={translate("addEditObservation.dateTime")}
      />
      <Input
        onChangeText={value => setFieldValue({ dateTimeInaccuracy: value })}
        wrapperStyles={styles.customInput}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        value={dateTimeInaccuracyValue}
        label={translate("addEditObservation.dateTimeInaccuracy")}
      />
      <Text style={styles.sectionTitle}>
        {translate("addEditObservation.comment")}
      </Text>
      <Text style={styles.sectionDescription}>
        {translate("addEditObservation.commentBlockDescription")}
      </Text>
      <Input
        onChangeText={value => setFieldValue({ comment: value })}
        customLabel={styles.customLabel}
        customViewStyles={styles.commentField}
        customTextStyles={styles.customText}
        value={comment}
        label={translate("addEditObservation.comment")}
      />
    </KeyboardAvoidingView>
  );
};

ObstaclesSection.propTypes = {
  onSearchOnMapPress: PropTypes.func,
  country: PropTypes.string,
  setFieldValue: PropTypes.func,
  countryValues: pickerValuesArrayType,
  coordinates: PropTypes.string,
  dateTime: PropTypes.string,
  dateTimeInaccuracy: PropTypes.string,
  comment: PropTypes.string
};
ObstaclesSection.defaultProps = {
  onSearchOnMapPress: () => {},
  country: "",
  setFieldValue: () => {},
  countryValues: [],
  coordinates: "",
  dateTime: "",
  dateTimeInaccuracy: "",
  comment: ""
};

export default ObstaclesSection;
