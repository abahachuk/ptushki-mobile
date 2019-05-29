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

/* from the string beginning and till the end there should be
   at least four characters, except spaces, tabs, etc
 */
const passwordRegExp = /^[^\s]{4,}$/;
export const makeValidatorPassword = makeSimpleValidator(passwordRegExp);
