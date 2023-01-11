const graph3 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};


function hasPath(graph3, source, destination, pathExists) {
    if (source === destination) pathExists[0] = true;
    for (let neighbour of graph3[source]) {
        hasPath(graph3, neighbour, destination, pathExists);
    }
}

function bfsHasPath(graph3, source, destination) {
    let queue = [source];
    while (queue.length > 0) {
        let current = queue.shift();
        if (current === destination) {
            return true;
        }
        for (let neighbour of graph3[current]) {
            queue.push(neighbour);
        }
    }
    return false;
}

// let pathExists = ['false'];
// hasPath(graph3, 'g', 'i', pathExists);
// console.log(pathExists[0])


console.log(bfsHasPath(graph3, "i", "j"));