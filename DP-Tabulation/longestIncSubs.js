function longestIncSubsequence(array) {
    const table = Array(array.length).fill(1);
    let lis = 0;
    for (let i = 1; i <= array.length - 1; i++) {
        let maxSoFar = table[0];
        for (let j = 0; j < i; j++) {
            if (array[j] > array[i]) continue;
            else maxSoFar = Math.max(maxSoFar, table[j] + 1);
        }
        table[i] = maxSoFar;
        if (table[i] > lis) {
            lis = table[i];
        }
    }
    console.log(table);
    return lis;

}


console.log(longestIncSubsequence([-1, 2, 3, 4, 5, 2, 2, 2, 2]))
console.log(longestIncSubsequence([-1, 1, -2, 0, 3, 5, -6]))