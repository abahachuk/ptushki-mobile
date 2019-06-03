/* eslint-disable */
import AsyncStorage from "@react-native-community/async-storage";
import { GET_OBSERVATIONS_ENDPOINT } from "config";
import { BaseService } from "api";
/* eslint-enable */

export default class ObservationService extends BaseService {
  async getObservations() {
    const token = await AsyncStorage.getItem("token");
    
    return super
      .sendRequest(GET_OBSERVATIONS_ENDPOINT, "GET", token)
      .then(response => response.json());
  }
}
