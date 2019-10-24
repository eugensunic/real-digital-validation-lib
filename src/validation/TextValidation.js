export const textValidation = {
  isLowerCase,
  isUpperCase,
  isNumericOnly,
  isLetterOnly,
  isSpecialCharacter,
  isAlphaNumeric
};

function isLowerCase(value) {
  return value === value.toLowerCase();
}

function isUpperCase(value) {
  return value === value.toUpperCase();
}

function isNumericOnly(value) {
  return /^\d+$/.test(value);
}

function isLetterOnly(value) {
  return /^[a-zA-Z]+$/.test(value);
}

function isSpecialCharacter(value) {
  const specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return specialCharacter.test(value);
}

function isAlphaNumeric(value) {
  return /^[a-zA-Z0-9\.]*$/.test(value);
}
