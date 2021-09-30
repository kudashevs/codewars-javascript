function getCountRegex(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

module.exports = getCountRegex;
