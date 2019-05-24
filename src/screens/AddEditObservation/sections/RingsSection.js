import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import { Button } from "../../../components";
import getDescriptionBlock from "./DescriptionBlock";
import { translate } from "../../../i18n";
import { styles } from "../styles";
import { pickerValuesArrayType } from "../../../propTypes";
import RingsCommonFields from "./RingsCommonFields";

const getEmptyPickerValue = () => {
  return {
    label: "",
    value: ""
  };
};
const getEmptyRingFieldsGroup = () => {
  return {
    type: getEmptyPickerValue(),
    material: getEmptyPickerValue(),
    color: getEmptyPickerValue(),
    location: getEmptyPickerValue(),
    ringId: ""
  };
};

const RingsSection = props => {
  const {
    rings,
    setRingsValues,
    ringTypeValues,
    ringMaterialValues,
    ringColorValues,
    ringLocationValues
  } = props;

  const getNewRingId = () => `${Object.keys(rings).length + 1}`;

  const onAddOneMoreRing = () =>
    setRingsValues(
      Object.assign({}, rings, {
        [getNewRingId()]: getEmptyRingFieldsGroup()
      })
    );

  const onFieldValueChange = ringKey => fieldName => itemValue => {
    const ringQuantity = `${ringKey || 1}`;

    setRingsValues(
      Object.assign({}, rings, {
        [ringQuantity]: Object.assign({}, rings[ringQuantity], {
          [fieldName]: itemValue
        })
      })
    );
  };

  const sortRingsGroup = (a, b) => (+a < +b ? -1 : 1);

  return (
    <View style={styles.ringsSectionContainer}>
      {getDescriptionBlock(
        translate("editObservation.ringHeader"),
        translate("editObservation.ringDescription")
      )}
      {Object.keys(rings)
        .sort(sortRingsGroup)
        .map(ringKey => {
          const {
            type = "",
            material = "",
            color = "",
            location = "",
            ringId = ""
          } = rings[ringKey];
          return (
            <RingsCommonFields
              key={ringKey}
              ringKey={ringKey}
              ringTypeSelectedValue={type}
              ringTypeValues={ringTypeValues}
              ringMaterialSelectedValue={material}
              ringMaterialValues={ringMaterialValues}
              ringColorSelectedValue={color}
              ringColorValues={ringColorValues}
              ringLocationSelectedValue={location}
              ringLocationValues={ringLocationValues}
              ringIdFilledValue={ringId}
              onFieldValueChange={onFieldValueChange(ringKey)}
            />
          );
        })}
      <View style={styles.oneMoreRingButtonContainer}>
        <Button
          onPress={onAddOneMoreRing}
          appearance="Light"
          caption={translate("editObservation.oneMoreRing")}
          wrapperStyles={styles.oneMoreRingButton}
        />
      </View>
    </View>
  );
};

RingsSection.propTypes = {
  rings: PropTypes.object,
  setRingsValues: PropTypes.func.isRequired,
  ringTypeValues: pickerValuesArrayType,
  ringMaterialValues: pickerValuesArrayType,
  ringColorValues: pickerValuesArrayType,
  ringLocationValues: pickerValuesArrayType
};
RingsSection.defaultProps = {
  rings: { "1": {} },
  ringTypeValues: [],
  ringMaterialValues: [],
  ringColorValues: [],
  ringLocationValues: []
};

export default RingsSection;