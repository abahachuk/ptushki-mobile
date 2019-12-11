import { StyleSheet } from "react-native";
import { blueLight, blue, blackOpacity } from "../../../constants/colors";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  imageContainer: {
    height: "65%",
    width: "100%"
  },
  image: {
    width: "auto",
    height: "100%"
  },
  article: {
    paddingTop: 20,
    marginBottom: 30,
    width: "70%",
    flex: 1
  },
  description: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  screenTitle: {
    textAlign: "center",
    fontFamily: "Lato",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0.25,
    color: blue
  },
  screenText: {
    textAlign: "center",
    fontFamily: "Lato",
    fontSize: 14,
    fontWeight: "300",
    letterSpacing: 0.25,
    lineHeight: 20,
    color: blackOpacity
  },
  box: {},
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5
  },
  background: {
    backgroundColor: blueLight
  },
  backgroundActive: {
    backgroundColor: blue
  }
});

export default styles;
