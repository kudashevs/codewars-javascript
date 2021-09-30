function vowelCountFilter(str) {
  return str.split('').filter((v) => 'aeiou'.includes(v)).length;
}

module.exports = vowelCountFilter;
