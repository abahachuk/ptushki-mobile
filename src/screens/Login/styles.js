import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row"
    // marginBottom: "auto"
  },
  infoImgContainer: {
    flex: 1,
    paddingTop: 20
  },
  header: {
    flex: 10,
    paddingTop: 10
  },
  infoImg: {
    width: 30,
    height: 30
  },
  logoImg: {
    width: "100%",
    height: 200,
    alignSelf: "center"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 15
  },
  footer: {
    // marginTop: "auto"
  },
  passwordInput: {
    marginTop: 15
  }
});
