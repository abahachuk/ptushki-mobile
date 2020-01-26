export const AUTH_LOGIN_ENDPOINT = '/auth/login';
export const AUTH_LOGOUT_ENDPOINT = '/auth/logout';
export const AUTH_REFRESH_ENDPOINT = '/auth/refresh';
export const AUTH_REGISTRATION_ENDPOINT = '/auth/signup';
export const AUTH_RESET_PASSWORD_ENDPOINT = '/auth/change-password';
export const OBSERVATIONS_ENDPOINT = '/observations';
export const INITIAL_DATA_ENDPOINT = '/initial-data';
export const UPDATE_EMAIL = '/update-email';
export const UPDATE_PASSWORD = '/update-password';
export const UPDATE_PERSONAL_DATA = '/update-personal-data';
// TODO: for now backend doesn't support description
/*eslint-disable*/
export const DELETE_OBSERVATIONS_ENDPOINT = (id, description) => `/observations/${id}`;
