/* eslint-disable */
import AsyncStorage from "@react-native-community/async-storage";
import { GET_OBSERVATIONS_ENDPOINT, DELETE_OBSERVATIONS_ENDPOINT } from "config";
import BaseService  from "./Base.service";
/* eslint-enable */

export default class ObservationService extends BaseService {
  async getObservations() {
    const token = await AsyncStorage.getItem("token");
    return super
      .sendRequest(GET_OBSERVATIONS_ENDPOINT, "GET", token)
      .then(response => {
        return response.json();
      });
  }

  async deleteObservation(id, description) {
    const token = await AsyncStorage.getItem("token");

    return super
      .sendRequest(
        DELETE_OBSERVATIONS_ENDPOINT(id, description),
        "DELETE",
        token
      )

      .then(response => {
        return response.json();
      });
  }
}
