import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white"
  },
  imageContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20
  },
  headerText: {
    fontSize: 34,
    paddingBottom: 20,
    color: "#4f6e7c",
    marginLeft: 15
  },
  buttonTitleStyle: {
    color: "#4f6e7c",
    textTransform: "uppercase",
    fontSize: 18
  },
  buttonStyle: {
    paddingTop: 25,
    paddingBottom: 25
  }
});
