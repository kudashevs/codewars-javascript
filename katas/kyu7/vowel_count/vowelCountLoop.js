function vowelCountLoop(str) {
  let vowelsCount = 0;
  let vowels = 'aeiou';
  let chars = str.split('');

  for (const char of chars) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

module.exports = vowelCountLoop;
