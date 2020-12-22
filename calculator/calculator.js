function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(arr) {
  return arr.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
}

function multiply(arr) {
  return arr.reduce((prev, cur) => {
    return prev * cur;
  }, 1);
}

function power(base, pow) {
  return Math.pow(base, pow);
}

function factorial(num) {
  //bc
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
