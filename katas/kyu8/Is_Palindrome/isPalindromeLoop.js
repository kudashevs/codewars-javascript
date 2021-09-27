function isPalindrome(x) {
  const chars = x.toLowerCase();
  let firstIndex = 0;
  let lastIndex = chars.length - 1;

  while (firstIndex < lastIndex) {
    if (chars[firstIndex] !== chars[lastIndex]) {
      return false;
    }

    firstIndex++;
    lastIndex--;
  }

  return true;
}

module.exports = isPalindrome;
