export const numberValidation = {
  isInteger,
  isDecimal,
  containsRange,
  isValidNumber
};

function isInteger(value) {
  return value % 1 === 0;
}

function isDecimal(value) {
  return value % 1 > 0;
}

function containsRange(value, min, max) {
  return value >= min && value <= max;
}

function isValidNumber(value) {
  return !isNaN(value);
}
