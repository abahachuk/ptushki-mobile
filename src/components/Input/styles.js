import { StyleSheet } from "react-native";

/* eslint-disable-next-line */
import * as colors from "constants/colors";

const { firebrick, white, borderBlack, textBlack } = colors;

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    borderWidth: 2,
    borderColor: borderBlack,
    borderRadius: 6
  },
  containerWithErrors: {
    borderColor: firebrick
  },
  label: {
    position: "absolute",
    top: 21,
    left: 19,
    fontSize: 23,
    color: textBlack
  },
  labelFocused: {
    top: -15,
    fontSize: 18,
    backgroundColor: white,
    paddingLeft: 5,
    paddingRight: 5
  },
  labelWithErrors: {
    color: firebrick
  },
  textInput: {
    fontSize: 23,
    color: textBlack
  },
  error: {
    fontSize: 18,
    color: firebrick
  },
  showHidePassIcon: {
    position: "absolute",
    top: 20,
    right: 15
  },
  inputIcon: {
    width: 35,
    height: 35
  }
});
