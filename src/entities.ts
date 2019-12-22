export enum LanguagesType {
  RUSSIAN = 'lang/russian',
  ENGLISH = 'lang/english',
}

export type ErrorType = {
  code?: number,
  message: string,
};

export interface ActionBaseType {
  type: string
}

export interface ActionErrorType extends ActionBaseType{
  error: ErrorType,
}