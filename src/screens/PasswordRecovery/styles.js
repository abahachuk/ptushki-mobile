import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20
  },
  main: {
    width: "100%"
  },
  logoImg: {
    width: 300,
    height: 280,
    alignSelf: "center"
  },
  headerText: {
    fontSize: 34,
    textAlign: "left"
  },
  hintText: {
    paddingTop: 10,
    paddingBottom: 15
  },
  resetPswBtn: {
    width: "100%",
    marginTop: 15
  },
  footer: {
    width: "100%"
  },
  backButton: {
    marginBottom: 10
  }
});