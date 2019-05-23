import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  logoImg: {
    width: 300,
    height: 280,
    alignSelf: "center"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center"
  },
  statusText: {
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 6,
    marginTop: 16,
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 24
  },
  hintText: {
    textAlign: "center",
    marginLeft: 6,
    marginBottom: 16,
    color: "#546E7A",
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: 24
  }
});
