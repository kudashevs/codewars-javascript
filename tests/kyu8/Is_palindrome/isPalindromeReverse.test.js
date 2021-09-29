const {assert} = require('chai');
const isPalindrome = require('codewars/katas/kyu8/Is_palindrome/isPalindromeReverse');

describe('Fixed tests', function () {
  it("Testing for 'a'", () => assert.strictEqual(isPalindrome('a'), true));
  it("Testing for 'aba'", () => assert.strictEqual(isPalindrome('aba'), true));
  it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome('Abba'), true));
  it("Testing for 'hello'", () => assert.strictEqual(isPalindrome('hello'), false));
  it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome('Bob'), true));
  it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome('Madam'), true));
  it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome('AbBa'), true));
  it("Testing for ''", () => assert.strictEqual(isPalindrome(''), true));
});
