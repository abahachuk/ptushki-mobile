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
    fontSize: 34,
    paddingBottom: 20,
    color: "#4f6e7c",
    marginLeft: 15
  },
  hintText: {
    marginLeft: 15,
    marginBottom: 16,
    fontFamily: "Roboto",
    fontSize: 22,
    lineHeight: 24
  },
  inputContainer: {
    marginLeft: 10
  },
  inputLabel: {
    marginTop: 20
  },
  buttonContainer: {
    marginBottom: 20,
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonStyle: {
    width: 150,
    borderColor: "#006202EE"
  },
  buttonTitleStyle: {
    color: "#4f6e7c",
    textTransform: "uppercase",
    paddingLeft: 40,
    paddingRight: 40
  },
  radioText: {
    fontFamily: "Arial",
    fontSize: 15
  }
});
