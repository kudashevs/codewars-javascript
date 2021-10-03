function accumArrayLoop(s) {
  let result = [];

  s.split('').forEach((v, i) => {
    result.push(v.toUpperCase() + v.toLowerCase().repeat(i));
  });

  return result.join('-');
}

module.exports = accumArrayLoop;
