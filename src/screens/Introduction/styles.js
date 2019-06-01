import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  main: {},
  imageContainer: {},
  image: {},
  descriptionContainer: {},
  footer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20
  },
  buttonBack: {
    width: "30%"
  },
  buttonNext: {
    width: "70%"
  },
});
