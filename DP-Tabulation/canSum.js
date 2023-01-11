// The Problem is given a targetSum , Can it be contructed using the elemsnts in an array


function canSum(targetSum, array) {
    // we will initiliaze the table with  false value 
    const table = Array(targetSum + 1);
    table.fill(false);

    // We know that 0 can always be produced no matter what the array has
    table[0] = true;

    for (let i = 0; i <= targetSum; i++){
        if (table[i] === true) {
            for (let num of array) {
                table[i + num] = true;
            }
        }
    }

    return table[targetSum];
}

console.log(canSum(2, [5, 3, 4]));