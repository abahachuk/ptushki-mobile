/* eslint-disable */
import AsyncStorage from "@react-native-community/async-storage";
import { AUTH_LOGIN_ENDPOINT, AUTH_REGISTRATION_ENDPOINT, AUTH_RESET_PASSWORD_ENDPOINT } from "config";
import { BaseService } from "api";
/* eslint-enable */

export default class AuthService extends BaseService {
  logIn(email, password) {
    return super
      .sendRequest(AUTH_LOGIN_ENDPOINT, "POST", null, {
        email,
        password
      })
      .then(response => {
        return response.json().then(data => {
          const dataToStore = [
            ["token", data.token],
            ["refreshToken", data.refreshToken],
            ["user", JSON.stringify(data.user)]
          ];

          AsyncStorage.multiSet(dataToStore);
          return data.user;
        });
      })
      .catch(err => console.log(err));
  }

  static registrate(email, password, firstName, lastName, phone) {
    return super
      .sendRequest(AUTH_REGISTRATION_ENDPOINT, "POST", null, {
        email,
        password,
        firstName,
        lastName,
        phone
      })
      .then(response => {
        return response.json().then(data => {
          const dataToStore = [
            ["token", data.token],
            ["refreshToken", data.refreshToken],
            ["user", JSON.stringify(data.user)]
          ];

          AsyncStorage.multiSet(dataToStore);
          return data.user;
        });
      });
  }

  static resetPassword(email) {
    return super.sendRequest(AUTH_RESET_PASSWORD_ENDPOINT, "POST", null, {
      email
    });
  }
}
