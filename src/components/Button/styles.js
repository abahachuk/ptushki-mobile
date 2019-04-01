import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 6,
    paddingTop: 13,
    paddingBottom: 13,
  },
  buttonDark: {
    backgroundColor: "#546e7a"
  },
  buttonLight: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#546e7a"
  },
  buttonBorderless: {

  },
  buttonText: {
    color: "#546e7a",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "500"
  },
  buttonTextDark: {
    color: "#ffffff"
  }
});
