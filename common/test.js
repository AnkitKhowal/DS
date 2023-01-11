// 1. Find the alphabet(s) with the highest occurrence in the given string: “my gym”
// Dont include spaces in result 


const highestFrequency = function (string) {
    if (!string) return [];
    let result = [];
    let map = {};
    let max = -Infinity;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") continue;
        if (string[i] in map) {
            map[string[i]]++;
        } else {
            map[string[i]] = 1;
        }
    }

    Object.keys(map).forEach((key) => {
        if (map[key] > max) {
            max = map[key];
        }
    });
    console.log("max", max);

    Object.keys(map).forEach((key) => {
        if (map[key] === max) {
            result.push({
                [key]: map[key]
            })
        }
    });

    return result;
}


let str1 = "my gym";
console.log(highestFrequency(str1)) // output ["m": 2 , "y": 2]
let str2 = "my    gym";
console.log(highestFrequency(str2))