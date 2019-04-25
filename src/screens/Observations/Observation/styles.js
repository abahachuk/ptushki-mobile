import { StyleSheet } from "react-native";
import * as colors from "../../../constants/colors";

export const styles = StyleSheet.create({
  observation: {
    backgroundColor: colors.white,
    marginHorizontal: 8,
    marginVertical: 5,
    fontFamily: "Roboto",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 9,
    elevation: 9
  },
  species: {
    marginLeft: 16,
    marginTop: 8,
    color: colors.textBlack,
    fontSize: 24,
    lineHeight: 28
  },
  ringNumberWrap: {
    marginLeft: 16,
    marginTop: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: colors.firebrick, // example color
    alignSelf: "flex-start",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  },
  ringNumber: {
    color: colors.white,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20
  },
  images: {
    marginLeft: 16,
    marginTop: 10
  },
  image: {
    width: 50,
    height: 50
  },
  country: {
    marginLeft: 16,
    marginTop: 7,
    color: colors.hexGray,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20
  },
  date: {
    marginLeft: 16,
    marginBottom: 7,
    color: colors.hexGray,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20
  }
});
