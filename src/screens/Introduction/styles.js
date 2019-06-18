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
  imageContainer: {
    position: "relative"
  },
  image: {
    width: "100%",
    height: 200
  },
  indicatorContainer: {
    width: "100%",
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    position: "absolute",
    bottom: 0
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff",
    zIndex: 100,
    marginRight: 5
  },
  circleSelected: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    zIndex: 100,
    marginRight: 5
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
