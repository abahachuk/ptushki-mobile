import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between"
  },
  closeBtnContainer: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 100
  },
  closeBtnImage: {
    width: 20,
    height: 20
  },
  footer: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30
  },
  buttonNext: {
    width: "auto"
  }
});

export default styles;
