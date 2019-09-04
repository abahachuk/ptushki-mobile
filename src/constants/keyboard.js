import { Platform } from "react-native";

// eslint-disable-next-line import/prefer-default-export
export const [showKeyboard, hideKeyboard] =
  Platform.OS === "ios"
    ? ["keyboardWillShow", "keyboardWillHide"]
    : ["keyboardDidShow", "keyboardDidHide"];
