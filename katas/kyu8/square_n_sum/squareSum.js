function squareSum(numbers) {
  return numbers.reduce((acc, v) => (acc += v * v), 0);
}

module.exports = squareSum;
