const calculateFib = (ceil, curr = 1, last = 1) => {
  while (curr < ceil) {
      return curr + calculateFib(ceil, curr + last, curr)
  }
  return curr;
};
