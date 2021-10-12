function splitStringRegex(str) {
  return str.concat('_').match(/\w{2}/gi) || [];
}

module.exports = splitStringRegex;
