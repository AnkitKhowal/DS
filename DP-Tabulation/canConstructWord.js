function canConstructWord(targetWord, wordBank) {
    
    const table = Array(targetWord.length + 1);
    table.fill(false);
    table[0] = true;

    for (let i = 0; i <= targetWord.length; i++){
        if (table[i] === true) {
            for (let word of wordBank) {
                if (targetWord.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[targetWord.length];
}

console.log(canConstructWord("abcde",["ab","abc","cd","def","abcd"]))