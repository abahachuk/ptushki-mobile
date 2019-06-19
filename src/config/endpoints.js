export const AUTH_LOGIN_ENDPOINT = "/auth/login";
export const AUTH_LOGOUT_ENDPOINT = "/auth/logout";
export const AUTH_REFRESH_ENDPOINT = "/auth/refresh";
export const AUTH_REGISTRATION_ENDPOINT = "/auth/signup";
export const AUTH_RESET_PASSWORD_ENDPOINT = "/auth/change-password";
export const GET_OBSERVATIONS_ENDPOINT = "/observations";
// TODO: for now backend doesn't support description
/*eslint-disable*/
export const DELETE_OBSERVATIONS_ENDPOINT = (id, description) => `/observations/${id}`;
export const OBSERVATIONS_ENDPOINT = "/observations";
