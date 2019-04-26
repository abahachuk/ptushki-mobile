import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import { Button, Input, CustomPicker } from "../../components";
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
      <Text style={styles.sectionTitle}>
        {translate("editObservation.place")}
      </Text>
      <View style={styles.geolocationButtons}>
        <Button
          wrapperStyles={styles.geolocationButton}
          customTextStyles={styles.buttonTextLeft}
          onPress={onCurrentPositionPress}
          caption={translate("editObservation.currentGeoposition")}
          appearance="Borderless"
        />
        <Button
          wrapperStyles={styles.geolocationButton}
          customTextStyles={styles.buttonTextRight}
          onPress={onSearchOnMapPress}
          caption={translate("editObservation.searchOnMap")}
          appearance="Borderless"
        />
      </View>
      <CustomPicker
        wrappedStyles={styles.countryPicker}
        defaultValue={country}
        onValueChange={itemValue => setFieldValue({ country: itemValue })}
        items={countryValues}
        caption={translate("editObservation.country")}
      />
      <Input
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        wrapperStyles={styles.customInput}
        value={region}
        label={translate("editObservation.region")}
      />
      <Input
        wrapperStyles={styles.customInput}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        value={coordinates}
        label={translate("editObservation.coordinates")}
      />
      <Text style={styles.sectionTitle}>Время</Text>
      <Button
        customTextStyles={styles.buttonTextLeft}
        caption={translate("editObservation.currentDateTime")}
        onPress={onCurrentDateTimePress}
        appearance="Borderless"
      />
      <Input
        wrapperStyles={styles.customInput}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        value={dateTime}
        label={translate("editObservation.dateTime")}
      />
      <Input
        wrapperStyles={styles.customInput}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        value={dateTimeInaccuracy}
        label={translate("editObservation.dateTimeInaccuracy")}
      />
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
