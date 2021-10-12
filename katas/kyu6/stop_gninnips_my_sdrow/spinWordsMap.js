function spinWordsMap(string) {
  return string
    .split(' ')
    .map((v) => {
      return v.length > 4 ? v.split('').reverse().join('') : v;
    })
    .join(' ');
}

module.exports = spinWordsMap;
