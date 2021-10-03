function accumReduce(s) {
  return s
    .split('')
    .map((v, i) => {
      return v.toUpperCase() + v.toLowerCase().repeat(i);
    }, [])
    .join('-');
}

module.exports = accumReduce;
