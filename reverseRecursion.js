const reverseString = (string, reversedArray) => {
  const stringLength = string.length
  const reversedLength = reversedArray.length
  if (stringLength === reversedLength) return reversedArray.join('')
  reversedArray.push(string.charAt((stringLength - reversedLength) -1))
  return reverseString(string, reversedArray)
}

console.log(reverseString('eilrahc', []))
