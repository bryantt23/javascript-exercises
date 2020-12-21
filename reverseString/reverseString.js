const reverseString = function (s) {
  let n = s.length,
    res = '';
  for (let i = n - 1; i >= 0; i--) {
    res += s[i];
  }
  return res;
};

module.exports = reverseString;
