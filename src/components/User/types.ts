import { ActionBaseType, ErrorType } from '../../entities';

export interface UsersStateType {
  token: any;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  loading: boolean;
  error?: ErrorType;
}

export interface UsersBaseActionType extends ActionBaseType, UsersStateType {}

export type UpdateUserEmailType = {
  email: string;
  password: string;
};

export type UpdateUserPasswordType = {
  password: string;
  newPassword: string;
};

export type UpdateUserPersonalDataType = {
  firstName: string;
  lastName: string;
  phone: string;
};

export interface UsersSagasType {
  watchActions: () => Generator;
}

export interface UpdateEmailActionType extends ActionBaseType, UpdateUserEmailType {}
export interface UpdatePasswordActionType extends ActionBaseType, UpdateUserPasswordType {}
export interface UpdatePersonalDataActionType extends ActionBaseType, UpdateUserPersonalDataType {}

export interface UsersUpdateEmailSuccessActionType extends ActionBaseType {
  email: string;
}
