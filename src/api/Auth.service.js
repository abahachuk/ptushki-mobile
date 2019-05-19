/* eslint-disable */
import "whatwg-fetch";
import AsyncStorage from "@react-native-community/async-storage";
import { AUTH_LOGIN_ENDPOINT, AUTH_REGISTRATION_ENDPOINT } from "config";
import { BaseService } from "api";
/* eslint-enable */

export default class AuthService {
  constructor() {
    this.baseService = new BaseService();
  }

  logIn(email, password) {
    return this.baseService
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

  registrate(email, password, firstName, lastName, phone) {
    return this.baseService
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
}
