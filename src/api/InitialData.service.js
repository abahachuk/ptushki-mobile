/* eslint-disable */
import AsyncStorage from "@react-native-community/async-storage";
import { INITIAL_DATA_ENDPOINT } from "config";
import { BaseService } from "api";
/* eslint-enable */

export default class InitialDataService extends BaseService {
  async getData() {
    const token = await AsyncStorage.getItem("token");

    return super
      .sendRequest(INITIAL_DATA_ENDPOINT, "GET", token)
      .then(response => response.json())
      .catch(err => console.info("Getting initial data error", err));
  }
}
