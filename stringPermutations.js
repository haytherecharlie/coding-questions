const permutations = (perm, word) => {
  if (word.length === 0) return console.log(`${perm}${word}`);
  for (let i in word) {
    const arg1 = `${perm}${word.charAt(i)}`;
    const arg2 = `${word.substr(0, i)}${word.substr(i + 1, word.length)}`;
    permutations(arg1, arg2);
  }
};

const printPermutations = string => {
  permutations("", string);
};

printPermutations('wowo')
