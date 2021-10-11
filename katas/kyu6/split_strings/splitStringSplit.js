function splitStringSplit(str) {
  if (str.length % 2 !== 0) {
    str += '_';
  }

  return str.split(/(..)/gi).filter((s) => s);
}

module.exports = splitStringSplit;
