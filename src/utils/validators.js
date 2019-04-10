const makeSimplValidatator = (regExp, errorMsg) => value => {
  if (!value) {
    return "";
  }

  return regExp.test(value) ? "" : errorMsg;
};
/* eslint-disable-next-line */
const emailRegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const validateEmail = makeSimplValidatator(
  emailRegExp,
  "Не выглядит как email"
);
/* eslint-disable-next-line */
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{10,30}$/;
export const validatePassword = makeSimplValidatator(
  passwordRegExp,
  "Пароль не соответсвует формату"
);
