import React from 'react';
import { View } from 'react-native';
import { RadioButton, Text, TouchableRipple } from 'react-native-paper';
import {  grayMedium, blackMedium } from "../../../constants/colors";
import styles from "./styles";

enum RadioStatus {
    CHECKED = 'checked',
    UNCHECKED = 'unchecked',
}

interface RadioProps {
  value: string,
  label: string,
  onChangeValue: () => void,
  isChecked: boolean,
}

const Radio: React.FC<RadioProps>  = ({ value, label, onChangeValue, isChecked }) => (
        <TouchableRipple
          rippleColor={grayMedium}
          onPress={onChangeValue}
          style={styles.container}
        >
        <View style={styles.row}>
          <View pointerEvents="none" style={styles.checkboxContainer}>
            <RadioButton
              value={value}
              status={isChecked ? RadioStatus.CHECKED : RadioStatus.UNCHECKED }
              color={blackMedium} />
          </View>
          <Text style={styles.label}>{label}</Text>
        </View>
        </TouchableRipple>
);

export default Radio;