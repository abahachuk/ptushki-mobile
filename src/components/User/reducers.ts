import { UsersBaseActionType, UsersStateType } from './types';
import {
  REQUEST_UPDATE_EMAIL,
  SET_USER_ERROR,
  REQUEST_UPDATE_EMAIL_SUCCESS,
  CLEAR_USER_ERROR,
  REQUEST_UPDATE_PASSWORD,
  REQUEST_UPDATE_PASSWORD_SUCCESS,
  REQUEST_UPDATE_PERSONAL_DATA,
  REQUEST_UPDATE_PERSONAL_DATA_SUCCESS,
} from './actions';

export const initialState: UsersStateType = {
  token: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  loading: false,
};

export default (
  state: UsersStateType = initialState,
  action: UsersBaseActionType,
): UsersStateType => {
  const { type } = action;
  switch (type) {
    case REQUEST_UPDATE_EMAIL:
    case REQUEST_UPDATE_PASSWORD:
    case REQUEST_UPDATE_PERSONAL_DATA:
      return { ...state, loading: true };
    case REQUEST_UPDATE_PERSONAL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        lastName: action.lastName,
        firstName: action.firstName,
        phone: action.phone,
      };
    case REQUEST_UPDATE_PASSWORD_SUCCESS:
      return { ...state, loading: false };
    case REQUEST_UPDATE_EMAIL_SUCCESS:
      return { ...state, email: action.email, loading: false };
    case SET_USER_ERROR:
      return { ...state, loading: false, error: action.error };
    case CLEAR_USER_ERROR:
      return { ...state, loading: false, error: undefined };
    default:
      return state;
  }
};
