// Number of Ways  to travel m*n  grid
function gridTravel(m, n) {
    const table = Array(m + 1).fill(0)
        .map(row => Array(n + 1).fill(0));

    // We know that there is 1 way to travel 1*1
    table[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const currentValue = table[i][j];
            if (j+1 <= n) { 
                table[i][j + 1] += currentValue;
            }
            if (i+1 <= m) {
                table[i + 1][j] += currentValue;
            } 
        }
    }
    return table[m][n];
}

console.log(gridTravel(3, 3)); // 6
console.log(gridTravel(4, 4));