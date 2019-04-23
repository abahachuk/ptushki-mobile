import AsyncStorage from "@react-native-community/async-storage";

export default async function onValueChange(keyValuePairs, callback) {
  try {
    await AsyncStorage.multiSet(keyValuePairs, callback);
  } catch (error) {
    console.log(`AsyncStorage error: ${error.message}`);
  }
}
