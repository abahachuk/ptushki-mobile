import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window"); // dirty solution

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    width,
    paddingVertical: 5
  },
  addObservation: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F57C00",
    borderRadius: 50,
    height: 56,
    width: 56,
    position: "absolute",
    bottom: 33,
    right: 18
  },
  buttonTextStyle: {
    color: "black",
    fontSize: 25,
    marginBottom: 5
  }
});
