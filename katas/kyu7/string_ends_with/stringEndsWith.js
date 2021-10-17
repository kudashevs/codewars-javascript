function stringEndsWith(str, ending) {
  return str.length >= ending.length && str.substr(str.length - ending.length) === ending;
}

module.exports = stringEndsWith;
