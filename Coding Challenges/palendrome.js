// function isPalindrome(str) {
//   if (str.length === 1) return true;

//   if (str.length >= 2) {
//     return str.charAt(0) === str.charAt(str.length - 1)
//       ? isPalindrome(str.substring(1, str.length - 1))
//       : false;
//   }
//   return true;
// }

const isPalendrome = (string) => {
  return string == string.toLowerCase().split('').reverse().join('')
}

console.log(isPalendrome("w e w"));
