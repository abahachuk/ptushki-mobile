import { StyleSheet } from "react-native";
import * as colors from "../../constants/colors";

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.white,
    width: "100%",
    elevation: 15,
    alignSelf: "flex-end",
    position: "absolute",
    zIndex: 5,
    top: 40,
    maxHeight: 170
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 16,
    height: 40,
    paddingLeft: 25
  },
  listItem: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingLeft: 25
  },
  itemText: {
    color: colors.black,
    fontSize: 16
  }
});

export default styles;
