const Test = require('@codewars/test-compat');
const solution = require('codewars/katas/kyu7/string_ends_with/stringEndsWith');

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(solution('abcde', 'cde'), true);
    Test.assertEquals(solution('abcde', 'abc'), false);
  });
});
