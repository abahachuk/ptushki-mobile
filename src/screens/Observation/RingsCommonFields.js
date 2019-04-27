import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import { translate } from "../../i18n";
import { styles } from "./styles";
import { Input, CustomPicker } from "../../components";
import { pickerValuesArrayType } from "../../propTypes";

const RingsCommonFields = props => {
  const {
    ringKey,
    ringTypeSelectedValue,
    ringTypeValues,
    ringMaterialSelectedValue,
    ringMaterialValues,
    ringColorSelectedValue,
    ringColorValues,
    ringLocationSelectedValue,
    ringLocationValues,
    ringIdFilledValue,
    onFieldValueChange
  } = props;

  return (
    <View>
      <Text style={styles.ringItemTitle}>
        {`${translate("editObservation.ring")} ${ringKey}`}
      </Text>
      <CustomPicker
        caption={translate("editObservation.ringType")}
        onValueChange={onFieldValueChange("type")}
        selectedValue={ringTypeSelectedValue}
        items={ringTypeValues}
        wrappedStyles={styles.ringField}
      />
      <CustomPicker
        caption={translate("editObservation.ringMaterial")}
        onValueChange={onFieldValueChange("material")}
        selectedValue={ringMaterialSelectedValue}
        items={ringMaterialValues}
        wrappedStyles={styles.ringField}
      />
      <View>
        <CustomPicker
          caption={translate("editObservation.ringColor")}
          onValueChange={onFieldValueChange("color")}
          selectedValue={ringColorSelectedValue}
          items={ringColorValues}
          wrappedStyles={styles.ringField}
        />
        <View
          style={[
            styles.colorPatch,
            { backgroundColor: ringColorSelectedValue }
          ]}
        />
      </View>
      <CustomPicker
        caption={translate("editObservation.ringLocation")}
        onValueChange={onFieldValueChange("location")}
        selectedValue={ringLocationSelectedValue}
        items={ringLocationValues}
        wrappedStyles={styles.ringField}
      />
      <Input
        onChangeText={onFieldValueChange("ringId")}
        wrapperStyles={[styles.customInput, styles.ringField]}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        value={ringIdFilledValue}
      />
    </View>
  );
};

RingsCommonFields.propTypes = {
  ringKey: PropTypes.string,
  ringTypeSelectedValue: PropTypes.string,
  ringTypeValues: pickerValuesArrayType,
  ringMaterialSelectedValue: PropTypes.string,
  ringMaterialValues: pickerValuesArrayType,
  ringColorSelectedValue: PropTypes.string,
  ringColorValues: pickerValuesArrayType,
  ringLocationSelectedValue: PropTypes.string,
  ringLocationValues: pickerValuesArrayType,
  ringIdFilledValue: PropTypes.string,
  onFieldValueChange: PropTypes.func.isRequired
};
RingsCommonFields.defaultProps = {
  ringKey: "1",
  ringTypeSelectedValue: "",
  ringTypeValues: [],
  ringMaterialSelectedValue: "",
  ringMaterialValues: [],
  ringColorSelectedValue: "",
  ringColorValues: [],
  ringLocationSelectedValue: "",
  ringLocationValues: [],
  ringIdFilledValue: ""
};

export default RingsCommonFields;
