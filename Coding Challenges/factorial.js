const factorial = (fac) => {
    if(fac === 0) return 1
    while(fac > 1) {
        return fac + factorial(fac - 1)
    }
    return fac
}

console.log(factorial(0))
console.log(factorial(4))