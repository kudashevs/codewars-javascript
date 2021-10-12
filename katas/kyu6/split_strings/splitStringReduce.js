function splitStringReduce(str) {
  return str
    .split(/(..)/gi)
    .filter(Boolean) // removes empty elements
    .reduce((acc, v) => {
      return acc.concat([v.length < 2 ? v + '_' : v]);
    }, []);
}

module.exports = splitStringReduce;
