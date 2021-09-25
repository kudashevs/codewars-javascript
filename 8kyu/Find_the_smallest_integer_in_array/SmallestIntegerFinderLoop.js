class SmallestIntegerFinderLoop {
  findSmallestInt(args) {
    let min = args.shift();

    for (let v of args) {
      if (v < min) {
        min = v;
      }
    }

    return min;
  }
}

module.exports = SmallestIntegerFinderLoop;
