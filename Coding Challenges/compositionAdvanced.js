function addRecursive(a, compute) {
  return compute ? a : (b, compute2) => addRecursive(a + b, compute2);
}

console.log(addRecursive(1)(2)(3, true));
