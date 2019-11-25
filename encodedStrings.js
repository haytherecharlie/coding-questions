const encodedStrings = string => {
  let charCount = 1;
  let encodedString = "";
  for (let index in string) {
    const intDex = parseInt(index);
    if (intDex > 0 && string[intDex] !== string[intDex - 1]) {
      encodedString += `${string[index - 1]}${charCount++}`;
      charCount = 1;
    }
    if (intDex > 0 && string[intDex] === string[intDex - 1]) {
      charCount += 1;
    }
    if (intDex === string.length - 1) {
      encodedString += `${string[index]}${charCount}`;
    }
  }
  return encodedString;
};

console.log(encodedStrings("hhhee"));
