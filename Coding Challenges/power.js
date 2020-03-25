const power = (base, exp) => {
    if(exp === 0) return 1
    while(exp > 1) {
        return base * power(base, exp - 1)
    }
    return base
}

console.log(power(5, 1))
console.log(power(3, 2))