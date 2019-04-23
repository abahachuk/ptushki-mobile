import "whatwg-fetch";
import AsyncStorage from "@react-native-community/async-storage";
import { HOST } from "./constants";
import onValueChange from "./asyncStorageSetter";
import { AuthService } from "../api";

export default async function updateToken(response, callback) {
  if (response.status === 403) {
    const refreshToken = await AsyncStorage.getItem("Refresh_token");

    // eslint-disable-next-line no-undef
    fetch(`${HOST}/api/protected_quote`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    }).then(res => {
      if (res.ok && res.status === 200) {
        res.text().then(text => {
          const data = text && JSON.parse(text);

          onValueChange(["Access_token", data.accessToken]);

          return callback();
        });
      }
      AuthService.logOut();
    });
  }
}
