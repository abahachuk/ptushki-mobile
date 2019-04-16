import 'whatwg-fetch'
import AsyncStorage from '@react-native-community/async-storage';

const HOST = "http://10.0.2.2:3000";

export default class AuthService {

  logIn(email, password) {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    };
    return (
      fetch(`${HOST}/api/login`, requestOptions)
        .then(response => {
          return response.text().then(text => {
            const data = text && JSON.parse(text);

            if (response.ok && response.status === 200) {
              this.onValueChange("Access_token", data.access_token);
              this.onValueChange("Refresh_token", data.refresh_token);
              this.onValueChange("User_Data", data);

              return data;
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          });
        })
        .catch(error => {
          console.info("Login failed:", error);
          throw new Error(error);
        })
    );
  }

  async logOut() {
    try {
      return await AsyncStorage.removeItem("User_Data");
    } catch (error) {
      console.log(`AsyncStorage error: ${error.message}`);
      return Promise.reject(error);
    }
  }

  async updateTokens() {
    const accessToken = await AsyncStorage.getItem("Access_token");
    const data = await AsyncStorage.getItem("User_Data");

    fetch(`${HOST}/api/protected_quote`, {
      method: "GET",
      headers: {
        Authorization: accessToken
      }
    }).then(response => {
      console.info("response 2", accessToken);
      console.info("response 2", data);
      if (response.ok && response.status === 200) {
        response.text().then(text => {
          const tokens = text && JSON.parse(text);

          data.access_token = tokens.access_token;
          data.refresh_token = tokens.refresh_token;

          this.onValueChange("Access_token", tokens.access_token);
          this.onValueChange("Refresh_token", tokens.refresh_token);
          this.onValueChange("User_Data", data);

          return data;
        });
      }
      this.logOut();
      const error = response.statusText;
      return Promise.reject(error);
    })
    .catch(error => {
      console.error("Error", error);
    });
  }

  async onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log(`AsyncStorage error: ${error.message}`);
    }
  }
}
