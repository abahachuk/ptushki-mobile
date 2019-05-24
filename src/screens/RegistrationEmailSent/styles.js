import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 15,
    marginRight: 15
  },
  logoImg: {
    width: 200,
    height: 180,
    alignSelf: "center"
  },
  headerText: {
    fontSize: 18,
    textAlign: "center",
    color: "#546E7A"
  },
  statusText: {
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 6,
    marginTop: 20,
    fontFamily: "Roboto",
    fontSize: 22,
    color: "#375867"
  },
  hintText: {
    textAlign: "center",
    marginLeft: 6,
    marginTop: 20,
    marginBottom: 20,
    color: "#546E7A",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 20
  }
});
