const baseobj = {
  h: 3,
  i: {
    j: 3,
    K: {
      g: 6
    }
  },
  n: {}
};

const setLeavesToNull = obj => {
  Object.keys(obj).map(key =>
    Object.values(obj[key]).length > 1
      ? setLeavesToNull(obj[key])
      : (obj[key] = null)
  );
  return obj;
};

console.log(setLeavesToNull(baseobj));
