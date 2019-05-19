import "whatwg-fetch";
import AsyncStorage from "@react-native-community/async-storage";
import { HOST } from "../utils/constants";

export default class AuthService {
  static logIn(email, password) {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    };

    // eslint-disable-next-line no-undef
    return fetch(`${HOST}/auth/login`, requestOptions)
      .then(response => {
        return response.json().then(data => {
          if (response.ok && response.status === 200) {
            const dataToStore = [
              ["token", data.token],
              ["refreshToken", data.refreshToken],
              ["user", JSON.stringify(data.user)]
            ];

            AsyncStorage.multiSet(dataToStore);
            console.info("Login is successful");
            return data.user;
          }
          const error = new Error(
            `Status: ${response.status}, message: ${data.error.message}`
          );
          return Promise.reject(error);
        });
      })
      .catch(error => {
        console.info("Login failed:", error.message);
        throw new Error(error);
      });
  }

  static registrate(email, password, firstName, lastName, phone) {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, firstName, lastName, phone })
    };
    // eslint-disable-next-line no-undef
    return fetch(`${HOST}/auth/signup`, requestOptions)
      .then(response => {
        return response.json().then(data => {
          if (response.ok && response.status === 200) {
            const dataToStore = [
              ["token", data.token],
              ["refreshToken", data.refreshToken],
              ["user", JSON.stringify(data.user)]
            ];

            AsyncStorage.multiSet(dataToStore);
            console.info("Registration is successful");
            return data;
          }

          const error = new Error(
            `Status: ${response.status}, message: ${data.error.message}`
          );
          return Promise.reject(error);
        });
      })
      .catch(error => {
        console.info("Registration failed:", error.message);
        throw new Error(error);
      });
  }

  static async logOut() {
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ closeAllSessions: true, refreshToken })
    };

    // eslint-disable-next-line no-undef
    return fetch(`${HOST}/auth/logout`, requestOptions)
      .then(response => {
        return response.json().then(data => {
          if (response.ok && response.status === 200) {
            AsyncStorage.multiRemove(["token", "refreshToken", "user"]);

            console.info("Logout is successful");
            return data;
          }
          const error = new Error(
            `Status: ${response.status}, message: ${data.error.message}`
          );
          return Promise.reject(error);
        });
      })
      .catch(error => {
        console.info("Logout failed:", error.message);
        throw new Error(error);
      });
  }
}
