const reduceAcc = [1, 2, 3].reduce((acc, val) => {
  acc[val] = ''
  return acc
}, {})

console.log(reduceAcc)