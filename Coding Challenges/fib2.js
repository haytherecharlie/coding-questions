function fib(max, count = 1, curr = 1, last = 1){
    while(count < max) {
        return fib(max, count + 1, curr + last, curr)
    }
    return last
}

console.log(fib(4))