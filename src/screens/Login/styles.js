import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 1,
    paddingTop: 30
  },
  logoImg: {
    top: 0,
    alignSelf: "center",
    marginBottom: 30
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    marginBottom: 15,
    fontSize: 20,
    paddingRight: 10,
    paddingLeft: 10
  },
  button: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 20
  },
  buttonLogin: {
    marginBottom: 15,
    backgroundColor: "#007bff"
  },
  buttonRegister: {
    backgroundColor: "#868e96"
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20
  }
});
