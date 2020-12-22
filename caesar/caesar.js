const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = upper.toLowerCase();
const lowerRev = lower.split('').reverse().join('');
const upperRev = upper.split('').reverse().join('');

const caesar = function (s, val) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (' ,!'.includes(c)) {
      res += c;
      continue;
    }

    if (upper.indexOf(c) > -1) {
      let index = upper.indexOf(c);
      if (val > 0) {
        index = (index + val) % upper.length;
      } else {
        let indexRev = upperRev.indexOf(c);
        let abs = Math.abs(val);
        indexRev = (indexRev + abs) % upper.length;
        res += upperRev[indexRev];
        continue;
      }
      res += upper[index];
    } else {
      let index = lower.indexOf(c);
      if (val > 0) {
        index = (index + val) % lower.length;
      } else {
        let indexRev = lowerRev.indexOf(c);
        let abs = Math.abs(val);
        indexRev = (indexRev + abs) % lower.length;
        res += lowerRev[indexRev];
        continue;
      }

      res += lower[index];
    }
  }

  return res;
};

module.exports = caesar;
