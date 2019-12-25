import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { black87, black06, blue, gray } from "../../constants/colors";


interface Styles {
  container: ViewStyle;
  margin: ViewStyle;
  logo: ViewStyle;
  developApp: ViewStyle;
  image: ImageStyle,
  epamLogo: ImageStyle,
  version: TextStyle,
  buttonWrapper: ViewStyle,
  text: TextStyle,
  title: TextStyle,
  article: ViewStyle,
  contactDetails: ViewStyle,
  contactDetailsTitle: TextStyle,
  contactDetailsItem: ViewStyle,
  contactDetailsLabel: TextStyle,
  contactDetailsInput: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {

  },
  margin: {
    paddingTop: 30,
    marginHorizontal: 20
  },
  logo: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 10
  },
  image: {
    marginBottom: 20,
    width: 185,
    height: 100
  },
  epamLogo: {
    marginTop: 17,
    height: 24,
    width: 68
  },
  version: {
    fontSize: 12,
    marginTop: 3
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
  contactDetails: {
    marginTop: 20,
    marginLeft: 20
  },
  developApp: {
    marginLeft: 20,
    marginBottom: 35,
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
