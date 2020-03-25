function flatten(oldArr, newArr = []) {
  oldArr.map(arr => Array.isArray(arr) ? (newArr = [...newArr, ...flatten(arr)]) : newArr.push(arr))
  return newArr;
}

console.log(flatten([1, 2, [[[3]]], [4, 5]])); // [1,2,3