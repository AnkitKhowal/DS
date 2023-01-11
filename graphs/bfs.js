const graph2 = {
    0: [1, 2, 3],
    1: [0, 2],
    2: [0, 1, 4],
    3: [0],
    4: [2]
}

function ibfs(graph2, source) {
    let queue = [source];
    let visited = new Set();
    while (queue.length > 0) {
        let current = queue.shift();

        if (visited.has(current)) continue;
        visited.add(current);

        console.log(current);
        for (let node of graph2[current]) {
            queue.push(node);
        }
    }
}

ibfs(graph2, 0); //abcdefghijk 