const Test = require('@codewars/test-compat');
const squareSum = require('codewars/katas/kyu8/square_n_sum/squareSum');

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(squareSum([1, 2]), 5);
    Test.assertEquals(squareSum([0, 3, 4, 5]), 50);
  });
});
