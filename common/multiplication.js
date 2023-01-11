/**
 * Multiply 2 big 10 pow 6 Numbers
 * @param  num1 
 * @param  num2 
 */
function multiply(num1, num2) {
    let result = new Array(num1.length + num2.length).fill(0);
    let num1arr = num1.split("");
    let num2arr = num2.split("");
    let count = 0;
    for (let i = num2arr.length - 1; i >=0; i--) {
        let carry = 0;
        let resultIdx = result.length - 1 - count;
        for (let j = num1arr.length - 1; j >= 0; j--) {
            let sum = result[resultIdx] + (num1arr[j] * num2arr[i]) + carry;
            let store = sum % 10;
            carry = Math.floor(sum / 10);
            result[resultIdx] = store;
            resultIdx--;
        }
        if (carry > 0) {
            result[resultIdx] = carry;
        }
        count++;
    }
    return result.join("");
}



// console.log(multiply("786", "559")); // 439374
// console.log(multiply("5556", "4488")); // 24935328
console.log(multiply("1234567891234567", "1234567891234567")) // 1524157878067365654031415677489