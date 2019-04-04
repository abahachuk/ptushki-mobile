import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10
  },
  logoImg: {
    width: 300,
    alignSelf: "center"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 15
  },
  footer: {
    paddingTop: 20
  }
});
