const sum = (...args) => {
  return args.length > 1
    ? args.reduce((acc, val) => (acc += val))
    : y => args[0] + y;
};

console.log(sum(1, 2, 3, 5));
console.log(sum(1)(2));
