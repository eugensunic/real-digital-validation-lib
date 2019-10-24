export const basicValidation = {
  isEmpty,
  isGreaterThan,
  isLesserThan,
  hasCharacter
};

function isEmpty(value) {
  return !value;
}

function isGreaterThan(value, length) {
  return value.length >= length;
}

function isLesserThan(value, length) {
  return value.length <= length;
}

function hasCharacter(value, char) {
  return value.indexOf(char) > -1;
}
