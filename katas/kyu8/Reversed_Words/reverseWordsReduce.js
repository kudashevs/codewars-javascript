// prettier-ignore
function reverseWords(str) {
  return str.split(' ').reduce((acc, item) => {
      return item + ' ' + acc;
  }, '').trim();
}

module.exports = reverseWords;
