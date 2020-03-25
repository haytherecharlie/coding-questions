function reverse(str, count = 0) {
  while (count < str.length) {
    return reverse(`${str.substring(0, count)}${str.substring(str.length - 1)}${str.substring(count, str.length - 1)}`,count + 1);
  }
  return str;
}

console.log(reverse("awesome"));
