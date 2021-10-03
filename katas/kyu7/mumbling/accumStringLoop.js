function accumStringLoop(s) {
  let result = s[0];

  for (let i = 1; i < s.length; i++) {
    let ch = s[i].toLowerCase();
    result += '-' + ch.toUpperCase() + ch.repeat(i);
  }

  return result;
}

module.exports = accumStringLoop;
