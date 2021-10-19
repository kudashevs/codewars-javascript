function inArrayLoop(array1, array2) {
  return array1
    .filter((needle) => {
      for (let hay of array2) {
        if (hay.includes(needle)) {
          return true;
        }
      }
      return false;
    })
    .sort();
}

module.exports = inArrayLoop;
