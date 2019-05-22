import { StyleSheet } from "react-native";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
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
  obstaclesSectionContainer: {
    marginTop: 36
  },
  toolbarTitle: {
    fontSize: 20,
    fontFamily: "Roboto",
    color: "white"
  },
  ringItemTitle: {
    marginTop: 20
  },
  birdPhoto: {
    height: 120,
    width: 120,
    marginRight: 10
  },
  ringsSectionContainer: {
    marginTop: 36
  },
  commentField: {
    borderWidth: 0,
    paddingLeft: 0,
    marginTop: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#9a9a9a"
  },
  restBirdPickers: {
    marginTop: 26
  },
  photosContainer: {
    marginTop: 28
  },
  oneMoreRingButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  oneMoreRingButton: {
    width: 290
  },
  geolocationButtons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  geolocationButton: {
    width: "50%"
  },
  buttonTextLeft: {
    textAlign: "left",
    fontSize: 16
  },
  buttonTextRight: {
    textAlign: "right",
    fontSize: 16
  },
  headerText: {
    fontSize: 30,
    paddingBottom: 5,
    color: "#212121"
  },
  descriptionText: {
    fontSize: 16
  },
  firstBirdPicker: {
    marginTop: 20
  },
  ringField: {
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
    left: 280,
    top: 60,
    width: 44,
    height: 24
  },
  sectionTitle: {
    marginTop: 15,
    marginBottom: -5,
    fontSize: 16,
    color: "#000000"
  },
  customInput: {
    marginTop: 20
  },
  customView: {
    borderWidth: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#9a9a9a",
    borderRadius: 0
  },
  customText: {
    paddingLeft: 25,
    paddingBottom: 10,
    fontSize: 16
  },
  countryPicker: {
    marginTop: 26,
    marginBottom: 20
  }
});