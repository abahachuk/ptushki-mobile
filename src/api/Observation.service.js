/* eslint-disable */
import AsyncStorage from "@react-native-community/async-storage";
import { OBSERVATIONS_ENDPOINT } from "config";
import { BaseService } from "api";
/* eslint-enable */

export default class ObservationService extends BaseService {
  async getObservations() {
    const token = await AsyncStorage.getItem("token");

    return super
      .sendRequest(OBSERVATIONS_ENDPOINT, "GET", token)
      .then(response => response.json());
  }

  async addObservations(data) {
    const token = await AsyncStorage.getItem("token");

    return super
      .sendRequest(OBSERVATIONS_ENDPOINT, "POST", token, data)
      .then(response => response.json());
  }

  async editObservations(data, id) {
    const token = await AsyncStorage.getItem("token");

    return super
      .sendRequest(`${OBSERVATIONS_ENDPOINT}/${id}`, "PUT", token, data)
      .then(response => response.json());
  }
}
