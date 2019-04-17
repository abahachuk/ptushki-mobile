import { StyleSheet } from "react-native";

/* eslint-disable-next-line */
import * as colors from "constants/colors";

const { dimGray, white } = colors;

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 6,
    paddingTop: 13,
    paddingBottom: 13
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
    color: dimGray,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "500"
  },
  buttonTextDark: {
    color: white
  }
});
