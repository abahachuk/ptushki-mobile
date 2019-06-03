import { StyleSheet } from "react-native";

// eslint-disable-next-line import/no-unresolved
import { dimGray } from "constants/colors";

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
  image: {
    width: "100%",
    height: 200
  },
  descriptionContainer: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20
  },
  screenTitle: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.25,
    color: "#375867"
  },
  screenText: {
    paddingTop: 10,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "300",
    letterSpacing: 0.1,
    lineHeight: 18,
    color: dimGray
  },
  footer: {
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
