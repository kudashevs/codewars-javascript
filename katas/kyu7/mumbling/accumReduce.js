function accumReduce(s) {
  return s
    .split('')
    .reduce((acc, v, i) => {
      return acc.concat(v.toUpperCase() + v.toLowerCase().repeat(i));
    }, [])
    .join('-');
}

module.exports = accumReduce;
