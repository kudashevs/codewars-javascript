function inArrayConcat(array1, array2) {
  let str = array2.join(' ');
  return array1.filter((v) => str.includes(v)).sort();
}

module.exports = inArrayConcat;
