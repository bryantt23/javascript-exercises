const sumAll = function (start, end) {
  if (typeof end != 'number' || start < 0) return 'ERROR';

  if (end < start) {
    let temp = start;
    start = end;
    end = temp;
  }

  let res = 0;

  for (let i = start; i <= end; i++) {
    res += i;
  }

  return res;
};

module.exports = sumAll;
