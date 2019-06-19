import { StyleSheet } from "react-native";

/* eslint-disable-next-line */
import * as colors from "constants/colors";

const { firebrick, white, borderBlack } = colors;

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    position: "relative",
    paddingLeft: 15,
    borderWidth: 0.5,
    borderColor: borderBlack,
    borderRadius: 4
  },
  containerWithErrors: {
    borderColor: firebrick
  },
  label: {
    position: "absolute",
    top: 15,
    left: 15,
    fontSize: 16,
    fontFamily: "Roboto",
    letterSpacing: 0.15,
    lineHeight: 24,
    color: "rgba(0,0,0,0.6)"
  },
  labelFocused: {
    top: -15,
    fontSize: 12,
    fontFamily: "Roboto",
    backgroundColor: white,
    paddingLeft: 5,
    paddingRight: 5
  },
  labelWithErrors: {
    color: firebrick
  },
  textInput: {
    fontSize: 16,
    color: "rgba(0,0,0,0.6)"
  },
  error: {
    fontFamily: "Roboto",
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 16,
    color: firebrick,
    paddingTop: 2
  },
  showHidePassIcon: {
    position: "absolute",
    top: 15,
    right: 15
  },
  inputIcon: {
    width: 24,
    height: 24
  }
});
