import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    borderWidth: 2,
    borderColor: "#151822",
    borderRadius: 6
  },
  containerWithErrors: {
    borderColor: "#b00020"
  },
  label: {
    position: "absolute",
    top: 21,
    left: 19,
    fontSize: 23,
    color: "#090a10"
  },
  labelFocused: {
    top: -15,
    fontSize: 18,
    backgroundColor: "#ffffff",
    paddingLeft: 5,
    paddingRight: 5
  },
  labelWithErrors: {
    color: "#b00020"
  },
  textInput: {
    fontSize: 23,
    color: "#090a10"
  },
  error: {
    fontSize: 18,
    color: "#b00020"
  },
  showHidePassIcon: {
    position: "absolute",
    top: 15,
    right: 15
  }
});
