const removeFromArray = function (...args) {
  let arr = args[0];
  let remove = args.slice(1);
  return arr.filter(elem => !remove.includes(elem));
};

module.exports = removeFromArray;
