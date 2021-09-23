// prettier-ignore
function reverseWords(str) {
  return str.split(' ').reduce((acc, item) => {
      return (acc = item + ' ' + acc);
  }, '').trim();
}

module.exports = reverseWords;
