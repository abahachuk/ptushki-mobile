/* eslint-disable */
import AsyncStorage from "@react-native-community/async-storage";
import { config, AUTH_REFRESH_ENDPOINT, AUTH_LOGOUT_ENDPOINT } from "config";
import { translate } from "../i18n";
/* eslint-enable */
/* eslint-disable class-methods-use-this */

export default class BaseService {
  async sendRequest(url, method, token = null, data = null) {
    const options = this.createRequestOptions(method, token, data);

    return this.makeCall(url, options).then(response => {
      if (response.status === 403) {
        return this.updateToken(response, url, options);
      }

      if (response.ok && response.status === 200) {
        return response;
      }

      return this.parseError(response);
    });
  }

  async updateToken(response, url, options) {
    const refreshToken = await AsyncStorage.getItem("refreshToken");

    if (refreshToken) {
      const refreshOptions = this.createRequestOptions("POST", null, {
        refreshToken
      });

      return this.makeCall(AUTH_REFRESH_ENDPOINT, refreshOptions).then(res => {
        if (res.ok && res.status === 200) {
          res.json().then(async data => {
            const dataToStore = [
              ["token", data.token],
              ["refreshToken", data.refreshToken]
            ];

            AsyncStorage.multiSet(dataToStore);
            return this.makeCall(url, options);
          });
        }

        this.makeCall(
          AUTH_LOGOUT_ENDPOINT,
          this.createRequestOptions("POST", null, {
            closeAllSessions: true,
            refreshToken
          })
        );

        return this.parseError(res);
      });
    }

    return Promise.resolve(response);
  }

  makeCall(url, options) {
    return fetch(`${config.host}${url}`, options);
  }

  createRequestOptions(method, token, data) {
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method
    };

    if (token) {
      options.headers.Authorization = token;
    }

    if (data) {
      options.body = JSON.stringify(data);
    }

    return options;
  }

  async parseError(response) {
    const { status } = response;
    const message = this.getMessage(status);

    return !message
      ? Promise.reject(response.message)
      : Promise.reject(message);
  }

  getMessage(status) {
    switch (status) {
      case 401:
        return translate("backendError.401");
      case 404:
        return translate("backendError.404");
      default:
        return undefined;
    }
  }
}
