function highAndLowLoop(numbers) {
  let digits = numbers.split(' ').map(Number);
  let max, min;
  max = min = digits[0];

  for (const v of digits) {
    if (v < min) {
      min = v;
    }

    if (v > max) {
      max = v;
    }
  }

  return max + ' ' + min;
}

module.exports = highAndLowLoop;
