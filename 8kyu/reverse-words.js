/**
 * @url https://www.codewars.com/kata/51c8991dee245d7ddf00000e/
 *
 * Complete the solution so that it reverses all of the words within the string passed in.
 */

function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

module.exports = reverseWords;
