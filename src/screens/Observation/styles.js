import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 20,
    paddingBottom: 12,
    width: "90%"
  },
  container: {
    flex: 1
  },
  toolbar: {
    backgroundColor: "#FF546E7A",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16
  },
  backButton: {
    marginRight: 32
  },
  toolbarTitle: {
    fontSize: 20,
    fontFamily: "Roboto"
  },
  birdPhoto: {
    height: 120
  },
  oneMoreRingButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  geolocationButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 34,
    paddingBottom: 20,
    color: "#4f6e7c"
  },
  hintText: {
    marginLeft: 6,
    marginBottom: 16,
    color: "#546E7A",
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: 24
  },
  belowInput: {
    marginTop: 15
  },
  lastInput: {
    marginBottom: 15
  },
  colorPatch: {
    position: "absolute",
    left: 240,
    top: 20,
    width: 44,
    height: 24
  }
});
