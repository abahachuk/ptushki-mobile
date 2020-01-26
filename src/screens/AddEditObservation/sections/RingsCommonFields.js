import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, Text } from 'react-native';

import { translate } from '../../../i18n';
import { styles } from '../styles';
import { Input, CustomPicker } from '../../../components';
import { pickerValuesArrayType } from '../../../propTypes';

const RingsCommonFields = props => {
  const {
    ringKey,
    ringTypeSelectedValue,
    ringTypeValues,
    // ringMaterialSelectedValue,
    // ringMaterialValues,
    // ringColorSelectedValue,
    // ringColorValues,
    // ringLocationSelectedValue,
    // ringLocationValues,
    ringIdFilledValue,
    onFieldValueChange,
  } = props;

  return (
    <KeyboardAvoidingView>
      <Text style={styles.ringItemTitle}>
        {`${translate('addEditObservation.ring')} ${ringKey}`}
      </Text>
      <CustomPicker
        caption={translate('addEditObservation.ringType')}
        onValueChange={onFieldValueChange('type')}
        selectedValue={ringTypeSelectedValue}
        items={ringTypeValues}
        wrappedStyles={styles.ringField}
      />
      {/* Below controlls probably will be changed or removed */}
      {/* <CustomPicker
        caption={translate("addEditObservation.ringMaterial")}
        onValueChange={onFieldValueChange("material")}
        selectedValue={ringMaterialSelectedValue}
        items={ringMaterialValues}
        wrappedStyles={styles.ringField}
      /> */}
      {/* <KeyboardAvoidingView>
        <CustomPicker
          caption={translate("addEditObservation.ringColor")}
          onValueChange={onFieldValueChange("color")}
          selectedValue={ringColorSelectedValue}
          items={ringColorValues}
          wrappedStyles={styles.ringField}
        />
        <View
          style={[
            styles.colorPatch,
            {
              backgroundColor:
                ringColorSelectedValue || ringColorValues.length
                  ? ringColorValues[0].value
                  : "transparent"
            }
          ]}
        />
      </KeyboardAvoidingView> */}
      {/* <CustomPicker
        caption={translate("addEditObservation.ringLocation")}
        onValueChange={onFieldValueChange("location")}
        selectedValue={ringLocationSelectedValue}
        items={ringLocationValues}
        wrappedStyles={styles.ringField}
      /> */}
      <Input
        onChangeText={onFieldValueChange('ringId')}
        wrapperStyles={[styles.customInput, styles.ringField]}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        value={ringIdFilledValue}
        label={translate('addEditObservation.ringNumber')}
      />
    </KeyboardAvoidingView>
  );
};

RingsCommonFields.propTypes = {
  ringKey: PropTypes.string,
  ringTypeSelectedValue: PropTypes.string,
  ringTypeValues: pickerValuesArrayType,
  // ringMaterialSelectedValue: PropTypes.string,
  // ringMaterialValues: pickerValuesArrayType,
  // ringColorSelectedValue: PropTypes.string,
  // ringColorValues: pickerValuesArrayType,
  // ringLocationSelectedValue: PropTypes.string,
  // ringLocationValues: pickerValuesArrayType,
  ringIdFilledValue: PropTypes.string,
  onFieldValueChange: PropTypes.func.isRequired,
};
RingsCommonFields.defaultProps = {
  ringKey: '1',
  ringTypeSelectedValue: '',
  ringTypeValues: [],
  // ringMaterialSelectedValue: "",
  // ringMaterialValues: [],
  // ringColorSelectedValue: "",
  // ringColorValues: [],
  // ringLocationSelectedValue: "",
  // ringLocationValues: [],
  ringIdFilledValue: '',
};

export default RingsCommonFields;
