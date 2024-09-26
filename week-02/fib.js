//recursive_fib
function recursive_fib(n) {
    if(n <= 1) {
        return n;
    }
    return recursive_fib(n-1) + recursive_fib(n-2);
}

//iterative_fib
function iterative_fib(n) {
    if(n <= 1) {
        return n;
    }

    let a = 0, b = 1, c;

    for(let i = 2; i <= n; ++i) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

//testing
console.log(recursive_fib(0)); // 0
console.log(recursive_fib(1)); // 1
console.log(recursive_fib(5)); // 5
console.log(recursive_fib(10)); // 55
//

console.log(iterative_fib(0)); // 0
console.log(iterative_fib(1)); // 1
console.log(iterative_fib(5)); // 5
console.log(iterative_fib(10)); // 55
