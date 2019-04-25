import React from "react";
import { View, Picker, Text } from "react-native";
import PropTypes from "prop-types";

import { Button, Input } from "../../components";
import getDescriptionBlock from "./DescriptionBlock";
import { translate } from "../../i18n";
import { styles } from "./styles";
import { pickerValuesArrayType } from "./propTypes";

const RingsSection = props => {
  const {
    rings,
    setRingsValues,
    ringTypeValues,
    ringMaterialValues,
    ringColorValues,
    ringLocationValues,
    onAddOneMoreRing
  } = props;

  return (
    <View>
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
              <Text>{`${translate("editObservation.ring")} ${+ringKey}`}</Text>
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
    </View>
  );
};

RingsSection.propTypes = {
  rings: PropTypes.object,
  setRingsValues: PropTypes.func,
  ringTypeValues: pickerValuesArrayType,
  ringMaterialValues: pickerValuesArrayType,
  ringColorValues: pickerValuesArrayType,
  ringLocationValues: pickerValuesArrayType,
  onAddOneMoreRing: PropTypes.func
};
RingsSection.defaultProps = {
  rings: {},
  setRingsValues: () => {},
  ringTypeValues: [],
  ringMaterialValues: [],
  ringColorValues: [],
  ringLocationValues: [],
  onAddOneMoreRing: () => {}
};

export default RingsSection;
