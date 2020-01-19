import { ActionBaseType, ActionErrorType, ErrorType } from '../../entities';
import {
  UpdateEmailActionType,
  UpdatePasswordActionType,
  UpdatePersonalDataActionType,
  UsersUpdateEmailSuccessActionType,
} from './types';

export const REQUEST_UPDATE_EMAIL = 'USER/REQUEST_UPDATE_EMAIL';
export const REQUEST_UPDATE_EMAIL_SUCCESS = 'USER/REQUEST_UPDATE_EMAIL_SUCCESS';
export const REQUEST_UPDATE_PASSWORD = 'USER/REQUEST_UPDATE_PASSWORD';
export const REQUEST_UPDATE_PASSWORD_SUCCESS = 'USER/REQUEST_UPDATE_PASSWORD_SUCCESS';
export const REQUEST_UPDATE_PERSONAL_DATA = 'USER/REQUEST_UPDATE_PERSONAL_DATA';
export const REQUEST_UPDATE_PERSONAL_DATA_SUCCESS = 'USER/REQUEST_UPDATE_PERSONAL_DATA_SUCCESS';

export const SET_USER_ERROR = 'USER/SET_USER_ERROR';
export const CLEAR_USER_ERROR = 'USER/CLEAR_USER_ERROR';

export const requestUpdateUserPersonalData = (
  firstName: string,
  lastName: string,
  phone: string,
): UpdatePersonalDataActionType => ({
  type: REQUEST_UPDATE_PERSONAL_DATA,
  firstName,
  lastName,
  phone,
});

export const requestUpdateUserPersonalDataSuccess = (
  firstName: string,
  lastName: string,
  phone: string,
): UpdatePersonalDataActionType => ({
  type: REQUEST_UPDATE_PERSONAL_DATA_SUCCESS,
  firstName,
  lastName,
  phone,
});

export const requestUpdateUserPassword = (
  password: string,
  newPassword: string,
): UpdatePasswordActionType => ({
  type: REQUEST_UPDATE_PASSWORD,
  password,
  newPassword,
});

export const requestUpdateUserPasswordSuccess = (): ActionBaseType => ({
  type: REQUEST_UPDATE_PASSWORD_SUCCESS,
});

export const requestUpdateUserEmail = (email: string, password: string): UpdateEmailActionType => ({
  type: REQUEST_UPDATE_EMAIL,
  email,
  password,
});

export const requestUpdateUserEmailSuccess = (
  email: string,
): UsersUpdateEmailSuccessActionType => ({
  type: REQUEST_UPDATE_EMAIL_SUCCESS,
  email,
});

export const setUserError = (error: ErrorType): ActionErrorType => ({
  type: SET_USER_ERROR,
  error,
});

export const clearUserError = (): ActionBaseType => ({
  type: CLEAR_USER_ERROR,
});
