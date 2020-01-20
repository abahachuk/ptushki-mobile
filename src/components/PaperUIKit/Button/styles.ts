import { StyleSheet } from "react-native";
import { ButtonType } from "./Button";
import { hexGray, blue, blueLight, blueMedium } from "../../../constants/colors";

export const getLabelStyleByType = (type: ButtonType): object => {
  switch (type) {
    case ButtonType.OUTLINED:
    case ButtonType.TEXT:
      return { ...styles.colorBlue, ...styles.label };
    case ButtonType.CONTAINED:
      return { ...styles.label };
    default:
      return {};
  }
};

export const getColorByType = (type: ButtonType): string => {
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

export const getContainerStyleByType = (type: ButtonType, containerStyle: object = {} ): object => {
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


const styles = StyleSheet.create({
  label: {
    fontSize: 16
  },
  colorBlue: {
    color: blue
  },
  border: {
    borderColor: hexGray,
    borderWidth: 1,
  }
});

export default styles;
