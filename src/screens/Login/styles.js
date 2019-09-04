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
  loginContainer: {
    width: "100%"
  },
  headerContainer: {
    flexDirection: "row"
  },
  infoImgContainer: {
    position: "absolute",
    top: 20,
    left: 0
  },
  infoImg: {
    width: 22,
    height: 22
  },
  logoImg: {
    marginTop: 10,
    width: 186,
    height: 104,
    alignSelf: "center"
  },
  headerText: {
    paddingVertical: 15,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 18,
    textAlign: "center",
    color: "#546e7a"
  },
  footer: {
    width: "100%"
  },
  passwordInput: {
    marginTop: 15
  },
  signInBtn: {
    marginTop: 20
  },
  signUpBtn: {
    marginTop: 15
  },
  restorePswBtn: {
    marginTop: 10,
    marginBottom: 10
  }
});
