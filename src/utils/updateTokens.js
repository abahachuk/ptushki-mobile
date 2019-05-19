import "whatwg-fetch";
import AsyncStorage from "@react-native-community/async-storage";
import { HOST } from "./constants";
import { AuthService } from "../api";

export default async function updateToken(response, callback) {
  if (response.status === 403) {
    const refreshToken = await AsyncStorage.getItem("refreshToken");

    // eslint-disable-next-line no-undef
    fetch(`${HOST}/auth/refresh`, {
      method: "GET",
      headers: {
        Authorization: refreshToken
      }
    }).then(res => {
      if (res.ok && res.status === 200) {
        res.json().then(data => {
          AsyncStorage.setItem("token", data.token);
          return callback();
        });
      }

      AuthService.logOut();
    });
  }

  return callback();
}
