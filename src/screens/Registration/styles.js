import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 20,
    paddingBottom: 12,
    width: "100%"
  },
  container: {
    justifyContent: "space-between",
    paddingRight: 18,
    paddingLeft: 18
  },
  headerText: {
    fontSize: 34,
    paddingBottom: 20,
    color: "#4f6e7c"
  },
  hintText: {
    marginTop: 15,
    marginBottom: 15,
    color: "#546E7A",
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.1
  },
  belowInput: {
    marginTop: 15
  },
  lastInput: {
    marginBottom: 20
  },
  footerBtn: {
    marginTop: 15
  }
});
