function positiveSum(arr) {
  return arr.reduce((acc, v) => acc + (v > 0 ? v : 0), 0);
}

module.exports = positiveSum;
