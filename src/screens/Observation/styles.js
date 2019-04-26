import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 18,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16
  },
  container: {
    flex: 1
  },
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    backgroundColor: "#546e7a",
    paddingLeft: 16
  },
  backButton: {
    marginRight: 32
  },
  toolbarTitle: {
    fontSize: 20,
    fontFamily: "Roboto",
    color: "white"
  },
  birdPhoto: {
    height: 120,
    width: 120,
    marginRight: 10
  },
  commentField: {
    marginTop: 100,
    borderBottomWidth: 2,
    borderBottomColor: "black"
  },
  restBirdPickers: {
    marginTop: 26
  },
  photosContainer: {
    marginTop: 28
  },
  oneMoreRingButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  geolocationButtons: {
    flex: 1,
    flexDirection: "column"
    // justifyContent: "space-between"
  },
  headerText: {
    fontSize: 34,
    paddingBottom: 10,
    color: "#212121"
  },
  descriptionText: {
    fontSize: 18
  },
  firstBirdPicker: {
    marginTop: 20
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
  },
  sectionTitle: {
    fontSize: 16
  }
});
