function intersectStrings(a, b) {
  b = b.split('');
  return a.split('').filter((v) => b.includes(v));
}

function vowelCountIntersection(str) {
  return intersectStrings(str, 'aeiou').length;
}

module.exports = vowelCountIntersection;
