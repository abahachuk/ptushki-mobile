import { StyleSheet } from "react-native";
import * as colors from "../../constants/colors";

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
  appLinkBlock: {
    marginTop: 30,
    fontSize: 16,
    lineHeight: 24
  },
  appLinkBlockLink: {
    color: "#5890e5"
  },
  backButton: {
    marginRight: 32
  },
  obstaclesSectionContainer: {
    marginTop: 36
  },
  resizedPhotoButton: {
    alignItems: "center"
  },
  resizedPhotoButtonText: {
    color: "coral",
    fontSize: 18,
    fontWeight: "500"
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
  birdPhotoResized: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },
  ringsSectionContainer: {
    marginTop: 36
  },
  commentField: {
    borderWidth: 0,
    paddingLeft: 0,
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#9a9a9a"
  },
  restBirdPickers: {
    marginTop: 26
  },
  photosContainer: {
    marginTop: 28
  },
  overlay: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 18
  },
  overlayGallery: {
    marginTop: 18
  },
  overlayTakePhoto: {
    marginTop: 18
  },
  overlayCloseWindow: {
    marginTop: 30,
    width: 96
  },
  overlayCloseWindowContainer: {
    alignItems: "flex-end"
  },
  overlayTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "black"
  },
  overlayDescription: {
    marginTop: 10,
    fontSize: 20
  },
  buttonWithIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 14,
    paddingRight: 16,
    height: 46,
    borderColor: "rgba(0,0,0,0.12)",
    borderWidth: 1,
    borderRadius: 4
  },
  buttonWithIconText: {
    fontSize: 18,
    color: colors.green
  },
  geolocationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },
  currentDateTimeButton: {
    marginTop: 20,
    justifyContent: "flex-start"
  },
  currentDateTimeText: {
    marginLeft: 40
  },
  geolocationButton: {
    width: "28%"
  },
  currentPosition: {
    width: "72%",
    paddingRight: 14
  },
  oneMoreRingButton: {
    marginTop: 20
  },
  buttonTextLeft: {
    textAlign: "left",
    fontSize: 16
  },
  buttonTextRight: {
    textAlign: "center",
    fontSize: 16
  },
  headerText: {
    fontSize: 30,
    paddingBottom: 5,
    color: "#212121"
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24
  },
  sectionDescription: {
    marginTop: 10,
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
  },
  submitButton: {
    marginTop: 30
  }
});
