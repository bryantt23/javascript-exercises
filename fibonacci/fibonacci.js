const fibonacci = function (num) {
  num = Number(num);
  if (num < 0) return 'OOPS';

  //bc
  if (num <= 1) {
    return num;
  }

  return fibonacci(num - 2) + fibonacci(num - 1);
};

module.exports = fibonacci;
