class SmallestIntegerFinderSort {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

module.exports = SmallestIntegerFinderSort;
