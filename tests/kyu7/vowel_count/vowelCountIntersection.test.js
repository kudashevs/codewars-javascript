const chai = require('chai');
const assert = chai.assert;
const getCount = require('codewars/katas/kyu7/vowel_count/vowelCountIntersection');

describe('Case 1', function () {
  it('should be defined', function () {
    assert.strictEqual(getCount('abracadabra'), 5);
  });
});
