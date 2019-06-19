import React from "react";
import { KeyboardAvoidingView, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

import getDescriptionBlock from "./DescriptionBlock";
import { translate } from "../../../i18n";
import { styles } from "../styles";
import { Input } from "../../../components";


const RingsSection = props => {
  const { rings, setRingsValues } = props;

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

  return (
    <KeyboardAvoidingView style={styles.ringsSectionContainer}>
      {getDescriptionBlock(
        translate("addEditObservation.ringHeader"),
        translate("addEditObservation.ringDescription")
      )}

      <Input
        onChangeText={text => {
          onFieldValueChange(text);
        }}
        wrapperStyles={[styles.customInput, styles.ringField]}
        customViewStyles={styles.customView}
        customTextStyles={styles.customText}
        value={rings}
        label={translate("addEditObservation.ringNumber")}
      />
    </KeyboardAvoidingView>
  );
};

RingsSection.propTypes = {
  rings: PropTypes.string,
  setRingsValues: PropTypes.func.isRequired
};

export default RingsSection;
