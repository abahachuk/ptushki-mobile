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
import { Button, Input } from "../../../components";
import getDescriptionBlock from "./DescriptionBlock";
import { translate } from "../../../i18n";
import { styles } from "../styles";
import { pickerValuesArrayType } from "../../../propTypes";

const countryValues = [
  { label: "Брестская область", value: "hi" },
  { label: "Витебская область", value: "hi" },
  { label: "Гомельская область", value: "hi" },
  { label: "Гродненская область", value: "hi" },
  { label: "Минская область", value: "hi" },
  { label: "Могилевская область", value: "hi" },
  { label: "Брестская область", value: "hi" }
];

const ObstaclesSection = props => {
  const {
    onSearchOnMapPress,
    setFieldValue,
    region,
    coordinates,
    dateTime,
    // dateTimeInaccuracy,
    comment,
    changeRegion,
    updateComment,
    updateDate
  } = props;

  const [
    { dateTimeValue },
    setDateTimeValue
  ] = useState({
    dateTimeValue: dateTime,
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

      <Input
        onChangeText={value => changeRegion(value)}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        wrapperStyles={styles.customInput}
        value={region}
        label={translate("addEditObservation.region")}
      />
      {/* <Input
        onChangeText={value => setFieldValue({ coordinates: value })}
        wrapperStyles={styles.customInput}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        value={coordinatesValue}
        label={translate("addEditObservation.coordinates")}
      /> */}
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
        onChangeText={value => updateDate(value)}
        wrapperStyles={styles.customInput}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        value={dateTimeValue}
        label={translate("addEditObservation.dateTime")}
      />

      <Text style={styles.sectionTitle}>
        {translate("addEditObservation.comment")}
      </Text>
      <Text style={styles.sectionDescription}>
        {translate("addEditObservation.commentBlockDescription")}
      </Text>
      <Input
        onChangeText={value => updateComment(value)}
        customLabel={styles.customLabel}
        customViewStyles={styles.commentField}
        customTextStyles={styles.customText}
        value={comment}
        label={translate("addEditObservation.comment")}
      />
    </KeyboardAvoidingView>
  );
};

export default ObstaclesSection;
