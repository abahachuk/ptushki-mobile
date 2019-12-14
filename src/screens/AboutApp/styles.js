import { StyleSheet } from "react-native";
import { black87, black06, blue, gray } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  logo: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    marginBottom: 20,
    width: 185,
    height: 100
  },
  version: {
    fontSize: 12
  },
  buttonWrapper: {
    marginTop: 20
  },
  text: {
    marginTop: 10,
    color: black87,
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25
  },
  article: {
    marginTop: 20
  },
  title: {
    color: blue,
    fontFamily: "Lato",
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 30
  },
  signUpBorder: {
    borderColor: "rgba(0,0,0,0.12)"
  },
  contactDetails: {
    marginTop: 20
  },
  contactDetailsTitle: {
    color: black06,
    fontFamily: "Roboto",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  contactDetailsItem: {
    marginTop: 10,
    paddingBottom: 10,
    borderBottomColor: gray,
    borderBottomWidth: 1
  },
  contactDetailsLabel: {
    color: black87,
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15
  },
  contactDetailsInput: {
    color: black06,
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25
  }
});

export default styles;
