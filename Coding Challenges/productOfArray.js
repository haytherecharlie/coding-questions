const product = arr => {
  if (arr.length === 0) return 0;
  while (arr.length > 1) {
      return arr.pop() * product(arr)
  }
  return arr[0]
};

console.log(product([1, 2, 2]));
console.log(product([1, 3, 5]));
