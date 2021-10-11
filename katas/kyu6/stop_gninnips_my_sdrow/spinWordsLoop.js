function spinWordsLoop(string) {
  let result = '';

  for (let word of string.split(' ')) {
    if (word.length > 4) {
      result += word.split('').reverse().join('');
    } else {
      result += word;
    }

    result += ' ';
  }

  return result.trim();
}

module.exports = spinWordsLoop;
