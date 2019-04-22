import "whatwg-fetch";
import AsyncStorage from "@react-native-community/async-storage";
import { HOST } from "./constants";
import onValueChange from "./asyncStorageSetter";
import { AuthService } from "../api";

export default async () => {
  const accessToken = await AsyncStorage.getItem("Access_token");
  const data = await AsyncStorage.getItem("User_Data");

  // eslint-disable-next-line no-undef
  fetch(`${HOST}/api/protected_quote`, {
    method: "GET",
    headers: {
      Authorization: accessToken
    }
  })
    .then(response => {
      if (response.ok && response.status === 200) {
        response.text().then(text => {
          const tokens = text && JSON.parse(text);

          data.access_token = tokens.access_token;
          data.refresh_token = tokens.refresh_token;

          onValueChange("Access_token", tokens.access_token);
          onValueChange("Refresh_token", tokens.refresh_token);
          onValueChange("User_Data", data);

          return data;
        });
      }
      AuthService.logOut();
      const error = response.statusText;
      return Promise.reject(error);
    })
    .catch(error => {
      console.error("Error", error);
    });
};
