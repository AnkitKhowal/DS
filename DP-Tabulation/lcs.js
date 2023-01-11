// Print the length of longest common subsequence
//strA = AGGTAB
//strB = GXTXAYB
//lcs(strA, strB) = GTAB

function longestCommonSubsequence(strA, strB) {
    const table = Array(strB.length + 1).fill(0).map((row) => Array(strA.length + 1).fill(0));

    for (let i = 1; i < table.length; i++) {
        for (let j = 1; j < table[0].length; j++) {
            if (strA[j - 1] === strB[i - 1]) {
                table[i][j] = table[i - 1][j - 1] + 1;
            } else {
                table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
            }
        }
    }
    // console.log(table);
    return table[strB.length][strA.length];
    
}

console.log(longestCommonSubsequence("AGGTAB", "GXTXAYB"))
console.log(longestCommonSubsequence("AAA", "AAA"))