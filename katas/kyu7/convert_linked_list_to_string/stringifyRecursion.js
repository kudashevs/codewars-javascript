function stringifyRecursion(list) {
  return list === null ? 'null' : list.data + ' -> ' + stringifyRecursion(list.next);
}

module.exports = stringifyRecursion;
