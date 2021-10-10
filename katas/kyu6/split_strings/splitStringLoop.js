function splitStringLoop(str) {
  if (!str) {
    return [];
  }

  let chars = str.split('');
  let result = [];
  let part = '';

  for (let i = 0; i < chars.length; i++) {
    part += chars[i];

    if (i % 2 !== 0) {
      result.push(part);
      part = '';
    }
  }

  if (part) {
    result.push(part + '_');
  }

  return result;
}

module.exports = splitStringLoop;
