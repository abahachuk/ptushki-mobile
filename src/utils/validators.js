const makeSimpleValidator = regExp => errorMsg => value => {
  if (!value) {
    return "";
  }

  return regExp.test(value) ? "" : errorMsg;
};
export const makeRequiredValidator = errorMsg => value => {
  return !value ? errorMsg : "";
};
/* eslint-disable-next-line */
const emailRegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const makeValidatorEmail = makeSimpleValidator(emailRegExp);
/* eslint-disable-next-line */
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{10,30}$/;
export const makeValidatorPassword = makeSimpleValidator(passwordRegExp);
