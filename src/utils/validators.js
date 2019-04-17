const makeSimpleValidator = (regExp, errorMsg) => value => {
  if (!value) {
    return "";
  }

  return regExp.test(value) ? "" : errorMsg;
};
const makeRequiredValidator = errorMsg => value => {
  return !value ? errorMsg : "";
};
/* eslint-disable-next-line */
const emailRegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const validateEmail = makeSimpleValidator(
  emailRegExp,
  "Не выглядит как email"
);
/* eslint-disable-next-line */
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{10,30}$/;
export const validatePassword = makeSimpleValidator(
  passwordRegExp,
  "Пароль не соответсвует формату"
);
export const validateFirstName = makeRequiredValidator(
  "Поле Имя не должно быть пустым"
);
export const validateLastName = makeRequiredValidator(
  "Поле Фамилия не должно быть пустым"
);
export const validatePhone = makeRequiredValidator(
  "Поле Телефон не должно быть пустым"
);
