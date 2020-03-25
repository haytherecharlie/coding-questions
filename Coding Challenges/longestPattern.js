const longest = str => {
  const strArr = str.split("");
  const split = strArr
    .map((char, i) => (char === "{" && strArr[i + 1] === "}" ? i : ""))
    .filter(String);

  const matches = (first, second, count) => {
    return strArr[first] === "{" && strArr[second] === "}"
      ? matches(first - 1, second + 1, count + 2)
      : count;
  };

  const totals = [];
  split.map(i => totals.push(matches(i - 1, i + 2, 2)));
  return totals.length ? Math.max(...totals) : 0;
};

console.log(longest("{{}}"));
