const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const highAndLow = require('codewars/katas/kyu7/highest_and_lowest/highAndLowLoop');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'), '42 -9');
  });
});
