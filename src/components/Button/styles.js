import { StyleSheet } from "react-native";

/* eslint-disable-next-line */
import * as colors from "constants/colors";

const { dimGray, white } = colors;

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  button: {
    width: 328,
    height: 36,
    borderRadius: 4
  },
  buttonDark: {
    backgroundColor: dimGray
  },
  buttonLight: {
    backgroundColor: white,
    borderWidth: 1,
    borderColor: dimGray
  },
  buttonBorderless: {},
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.25,
    lineHeight: 16,
    color: dimGray,
    textAlign: "center",
    textTransform: "uppercase",
    paddingTop: 10
  },
  buttonTextDark: {
    color: white
  }
});
