import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 20,
    paddingBottom: 12,
    width: "90%"
  },
  container: {
    flex: 1
  },
  headerText: {
    fontSize: 20,
    paddingBottom: 15
  },
  hintText: {
    marginLeft: 6,
    marginBottom: 16,
    color: "#546E7A",
    fontFamily: "Roboto",
    fontSize: 20,
    lineHeight: 28
  },
  belowInput: {
    marginTop: 15
  },
  lastInput: {
    marginBottom: 15
  },
  input: {
    borderColor: "transparent",
    borderBottomColor: "gray"
  }
});
