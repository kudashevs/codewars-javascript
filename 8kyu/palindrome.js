/**
 * @url https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
 *
 * Is it a palindrome?
 *
 * Write a function that checks if a given string (case insensitive) is a palindrome.
 */

function isPalindrome(x) {
  if (x.length <= 1) {
    return true;
  }

  const chars = x.toLowerCase().split('');
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
