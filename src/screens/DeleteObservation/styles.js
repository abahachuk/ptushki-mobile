import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10
  },
  hintText: {
    color: "#626262",
    fontFamily: "Roboto",
    fontSize: 18,
    letterSpacing: 0.15,
    lineHeight: 26
  },
  input: {
    marginTop: 10,
    marginBottom: 10
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonsText: {
    fontWeight: "500",
    color: "#5A737F",
    textTransform: "uppercase"
  }
});
