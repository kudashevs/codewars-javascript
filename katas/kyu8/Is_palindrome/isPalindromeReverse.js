function isPalindromeReverse(x) {
  return (x = x.toLowerCase()) === x.split('').reverse().join('');
}

module.exports = isPalindromeReverse;
