function highAndLowSort(numbers) {
  let chars = numbers.split(' ').sort((a, b) => a - b);

  return chars[chars.length - 1] + ' ' + chars[0];
}

module.exports = highAndLowSort;
