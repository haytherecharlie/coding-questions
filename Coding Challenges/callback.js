// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback) {
  if (arr.length) {
    return callback(arr.pop()) ? true : someRecursive(arr, callback)
  }
  return false;
}

console.log(someRecursive([2], isOdd)); // true
