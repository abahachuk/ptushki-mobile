import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
}
const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
});

export default styles;
