function maxContiguousSum(array) {
    const table = Array(array.length).fill(0);
    table[0] = array[0];
    
    let maxSoFar = 0;
    for (let i = 1; i <= array.length - 1; i++){
        table[i] = Math.max(array[i], table[i-1] + array[i]);
        if (table[i] > maxSoFar) {
            maxSoFar = table[i];
        }
    }
    console.log(table)
    return maxSoFar;
}

console.log(maxContiguousSum([-2,1,-3,4,-1,2,1,-5,4])) // output 6