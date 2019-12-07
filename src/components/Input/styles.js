import { StyleSheet } from "react-native";

/* eslint-disable-next-line */
import * as colors from "constants/colors";

const { firebrick, white, borderBlack } = colors;

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    paddingLeft: 15,
    borderColor: borderBlack,
    borderWidth: 0.5,
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
    top: -9,
    fontFamily: "Roboto",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    paddingHorizontal: 5,
    backgroundColor: white
  },
  labelWithErrors: {
    color: firebrick
  },
  textInput: {
    paddingVertical: 15,
    fontSize: 16,
    color: "rgba(0,0,0,0.87)"
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
