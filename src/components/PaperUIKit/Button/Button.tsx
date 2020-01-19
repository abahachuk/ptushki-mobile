import React from 'react';
import { Button as ButtonUIPaper } from 'react-native-paper';
import { blueLight, blueMedium } from '../../../constants/colors';
import styles from './styles';

export enum ButtonType {
  OUTLINED = 'outlined',
  TEXT = 'text',
  CONTAINED = 'contained',
}

interface ButtonProps {
  type: ButtonType;
  title: string;
  containerStyle?: object;
  labelStyle?: object;
  onPress: () => void;
}

const getLabelStyleByType = (type: ButtonType, labelStyle: object = {}): object => {
  switch (type) {
    case ButtonType.OUTLINED:
    case ButtonType.TEXT:
      return { ...styles.colorBlue, ...styles.label, ...labelStyle };
    case ButtonType.CONTAINED:
      return { ...styles.label, ...labelStyle };
    default:
      return { ...labelStyle };
  }
};

const getColorByType = (type: ButtonType): string => {
  switch (type) {
    case ButtonType.OUTLINED:
    case ButtonType.TEXT:
      return blueLight;
    case ButtonType.CONTAINED:
      return blueMedium;
    default:
      return '';
  }
};

const getContainerStyleByType = (type: ButtonType, containerStyle: object = {}): object => {
  switch (type) {
    case ButtonType.OUTLINED:
      return { ...styles.border, ...containerStyle };
    case ButtonType.CONTAINED:
    case ButtonType.TEXT:
      return { ...containerStyle };
    default:
      return {};
  }
};

const Button: React.FC<ButtonProps> = ({ type, onPress, title, containerStyle, labelStyle }) => (
  <ButtonUIPaper
    mode={type}
    labelStyle={getLabelStyleByType(type, labelStyle)}
    color={getColorByType(type)}
    style={getContainerStyleByType(type, containerStyle)}
    onPress={onPress}
  >
    {title}
  </ButtonUIPaper>
);

export default Button;
