const logDuplicateCounts = string => {
  const charObj = {};
  let duplicateCount = "";
  for (let char of string) {
    if (char !== " ") {
      charObj[char] = charObj[char] + 1 || 1;
    }
  }
  for (let key in charObj) {
    if(charObj[key] > 1)
      duplicateCount = `${duplicateCount}${key}${charObj[key]}`
  }
  return duplicateCount;
};

console.log(logDuplicateCounts("hey there charlie"));
