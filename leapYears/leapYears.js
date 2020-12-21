const leapYears = function (year) {
  if (year % 100 === 0) {
    return year % 400 == 0;
  } else if (year % 4 == 0) {
    return true;
  }

  return false;
};

module.exports = leapYears;
