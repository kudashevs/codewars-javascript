const Test = require('@codewars/test-compat');
const reverseWords = require('codewars/katas/kyu8/Reversed_Words/reverseWordsReverse');

describe('reverseWords', function () {
  it('should work for some examples', function () {
    Test.assertEquals(reverseWords('hello world!'), 'world! hello');
    Test.assertEquals(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda");
    Test.assertEquals(reverseWords('foobar'), 'foobar');
    Test.assertEquals(reverseWords('kata editor'), 'editor kata');
    Test.assertEquals(reverseWords('row row row your boat'), 'boat your row row row');
  });
});
