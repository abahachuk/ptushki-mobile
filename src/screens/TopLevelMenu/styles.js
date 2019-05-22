import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  imageContainer: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 15
  },
  image: {
    height: 100,
    width: 150
  },
  userNameText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 15,
    color: "black",
    marginBottom: 5
  },
  userRoleText: {
    fontSize: 16,
    paddingLeft: 15,
    color: "black"
  },
  divider: {
    backgroundColor: "#F5F5F5",
    marginTop: 10,
    marginBottom: 15,
    padding: 1
  }
});
