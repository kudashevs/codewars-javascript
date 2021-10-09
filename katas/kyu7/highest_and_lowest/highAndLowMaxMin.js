function highAndLowSort(numbers) {
  let digits = numbers.split(' ').map(Number);

  return Math.max(...digits) + ' ' + Math.min(...digits);
}

module.exports = highAndLowSort;
