const palindromes = function (s) {
  s = s.replace(/[ ,.!]/g, '').toLowerCase();
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] != s[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }

  return true;
};

module.exports = palindromes;
