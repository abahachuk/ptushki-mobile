import React from 'react';
import { Button as ButtonUIPaper } from 'react-native-paper';
import { getColorByType, getContainerStyleByType, getLabelStyleByType } from "./styles";

export enum ButtonType {
  OUTLINED = 'outlined',
  TEXT = 'text',
  CONTAINED = 'contained',
}

interface ButtonProps {
  type: ButtonType,
  title: string,
  containerStyle?: object,
  onPress: () => void
}

const Button: React.FC<ButtonProps>  = ({ type, onPress, title, containerStyle }) => (
  <ButtonUIPaper
    mode={type}
    labelStyle={getLabelStyleByType(type)}
    color={getColorByType(type)}
    style={getContainerStyleByType(type, containerStyle)}
    onPress={onPress}>
    {title}
  </ButtonUIPaper>
);

export default Button;