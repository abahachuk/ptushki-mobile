import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerContainer: {
    flexDirection: "row"
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
    width: 22,
    height: 22
  },
  logoImg: {
    width: 186,
    height: 104,
    alignSelf: "center"
  },
  headerText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.1,
    lineHeight: 18,
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 15,
    color: "#546e7a"
  },
  footer: {},
  passwordInput: {
    marginTop: 15
  },
  loginForm: {},
  signInBtn: {
    marginTop: 20
  },
  signUpBtn: {},
  restorePswBtn: {
    marginTop: 10,
    marginBottom: 10
  }
});
