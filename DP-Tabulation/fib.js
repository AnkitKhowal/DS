function fib(n) {
    const table = Array(n + 1); // table will be initialized with undefined
    table.fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];

}

const fibIterative = function (n) {
    let arr = new Array(n + 1).fill(0);
    arr[1] = 1;
    for (let i = 1; i < n; i++){
        arr[i + 1] += arr[i];
        arr[i + 2] += arr[i];
    }
    return arr[n];
}

// Recursive  with memoization
function fibonaci(n, memo) {
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;

    memo[n] = fibonaci(n - 1, memo) + fibonaci(n - 2,memo);
    return memo[n];
}


// console.log(fib(6));
// console.log(fib(49)); //7778742049

console.log(fibIterative(6));
console.log(fibIterative(49)); //7778742049


// let memo = {};
// // console.log(fibonaci(6, memo));
// console.log(fibonaci(49, memo));
