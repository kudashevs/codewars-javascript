function spinWordsRegex(string) {
  return string.replace(/\w{5,}/gi, (v) => v.split('').reverse().join(''));
}

module.exports = spinWordsRegex;
