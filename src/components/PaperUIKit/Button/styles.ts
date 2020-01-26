import { StyleSheet } from 'react-native';
import { ButtonType } from './Button';
import { blue, blueLight, blueMedium, black012 } from '../../../constants/colors';

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'sans-serif-medium',
  },
  colorBlue: {
    color: blue,
  },
  border: {
    borderColor: black012,
    borderWidth: 1,
  },
});

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

export { styles, getLabelStyleByType, getColorByType, getContainerStyleByType };
