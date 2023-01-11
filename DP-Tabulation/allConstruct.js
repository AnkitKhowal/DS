function allConstruct(targetWord, wordBank) {
    const table = Array(targetWord.length + 1).fill().map(() => []);
    table[0] = [[]];
    console.log(table);

    for (let i = 0; i <= targetWord.length; i++){
        for (let word of wordBank) {
            if (targetWord.slice(i, i + word.length) === word) {
                const newCombination = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombination);
            }
        }
    }
    return table[targetWord.length];
}

console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd","ef","c"]))