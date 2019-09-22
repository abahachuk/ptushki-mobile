import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "flex-start",
    paddingVertical: 20
  },
  image: {
    height: "50%",
    width: undefined,
    aspectRatio: 360 / 292, // assets image size
    resizeMode: "contain"
  },
  headerText: {
    fontSize: 34,
    paddingBottom: 20,
    color: "#4f6e7c",
    marginLeft: 15
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "space-around",
    maxHeight: "50%",
    marginVertical: 20
  },
  buttonStyle: {
    paddingVertical: 15,
    marginVertical: 2
  },
  buttonTitleStyle: {
    color: "#546E7A",
    textTransform: "uppercase",
    fontSize: 14,
    lineHeight: 16
  }
});
