import "whatwg-fetch";
import AsyncStorage from "@react-native-community/async-storage";
import { HOST } from "../utils/constants";
import onValueChange from "../utils/asyncStorageSetter";

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
    return fetch(`${HOST}/api/login`, requestOptions)
      .then(response => {
        return response.text().then(text => {
          const data = text && JSON.parse(text);

          if (response.ok && response.status === 200) {
            onValueChange("Access_token", data.access_token);
            onValueChange("Refresh_token", data.refresh_token);
            onValueChange("User_Data", data);

            return data;
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        });
      })
      .catch(error => {
        console.info("Login failed:", error);
        throw new Error(error);
      });
  }

  static registration(email, password, firstName, lastName, phone) {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, firstName, lastName, phone })
    };
    // eslint-disable-next-line no-undef
    return fetch(`${HOST}/api/registration`, requestOptions)
      .then(response => {
        return response.text().then(text => {
          const data = text && JSON.parse(text);

          if (response.ok && response.status === 200) {
            return data;
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        });
      })
      .catch(error => {
        console.info("Registration failed:", error);
        throw new Error(error);
      });
  }

  static async logOut() {
    try {
      return await AsyncStorage.removeItem("User_Data");
    } catch (error) {
      console.log(`AsyncStorage error: ${error.message}`);
      return Promise.reject(error);
    }
  }
}
