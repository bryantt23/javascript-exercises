let findTheOldest = function (people) {
  return people.reduce(getOlder);
};

function getOlder(acc, cur) {
  let accAge =
      (acc.yearOfDeath === undefined ? 2020 : acc.yearOfDeath) -
      acc.yearOfBirth,
    curAge =
      (cur.yearOfDeath === undefined ? 2020 : cur.yearOfDeath) -
      cur.yearOfBirth;

  if (curAge > accAge) {
    return cur;
  } else {
    return acc;
  }
}

module.exports = findTheOldest;
