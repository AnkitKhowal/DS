function countConstructWord(targetWord, wordBank) {

    const table = Array(targetWord.length + 1);
    table.fill(0);
    table[0] = 1;

    for (let i = 0; i <= targetWord.length; i++) {
        for (let word of wordBank) {
            if (targetWord.slice(i, i + word.length) === word) {
                table[i + word.length]++;
            }
        }
    }
    console.log(table);
    return table[targetWord.length];
}

console.log(countConstructWord("purple", ["pur", "ple", "purp", "le", "p","urple"]))