import AsyncStorage from "@react-native-community/async-storage";

export default async function onValueChange(item, selectedValue) {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    console.log(`AsyncStorage error: ${error.message}`);
  }
}
