const repeatString = function (s, ct) {
  if (ct < 0) {
    return 'ERROR';
  }
  let res = '';
  for (let i = 0; i < ct; i++) {
    res += s;
  }
  return res;
};

module.exports = repeatString;
