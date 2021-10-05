function stringifyLoop(list) {
  let res = '';

  while (list !== null) {
    res += list.data + ' -> ';
    list = list.next;
  }

  res += 'null';

  return res;
}

module.exports = stringifyLoop;
