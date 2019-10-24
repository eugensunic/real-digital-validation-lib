export const urlValidation = {
  isValidUrl
};

// taken from the web since the check is complex
function isValidUrl(value) {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return regexp.test(value);
}
