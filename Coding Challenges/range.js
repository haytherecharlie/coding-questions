const range = (num) => {
    while(num > 0) {
        return num + range(num - 1)
    }
    return num
}

console.log(range(0))