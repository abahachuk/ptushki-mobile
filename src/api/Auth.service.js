import "isomorphic-fetch";

const HOST = "http://10.0.2.2:3000";

export default class AuthService {
  static login(email, password) {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    };
    return (
      // eslint-disable-next-line no-undef
      fetch(`${HOST}/login`, requestOptions)
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
          console.error("login failed", error);
        })
    );
  }
}
