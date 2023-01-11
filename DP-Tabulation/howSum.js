function howSum(targetSum, array) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of array) {
                table[i + num] = [...table[i], num];
            }
        }
    }
    return table[targetSum];
}

console.log(howSum(4, [1, 2, 3]));