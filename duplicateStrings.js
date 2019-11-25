const printDuplicates = (string) => {
  for (let index in string) {
    console.log(typeof index)
    if(index !== 0 && string[index] === string[index -1]) {
      console.log(`${string[index-1]}${string[index]}`)
    }
  }
}

console.log(printDuplicates('hhellowworld'))