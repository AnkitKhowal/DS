const graph = {
    0: [1, 2, 3],
    1: [0, 2],
    2: [0, 1, 4],
    3: [0],
    4: [2]
}

function Idfs(graph, source) {
    let stack = [source];
    while (stack.length > 0) {
        let current = stack.pop();
        console.log(current);
        for (let node of graph[current]) {
            stack.push(node);
        }
    }
}

function rDfs(graph, source, visited = null) {
    if (visited === null) {
        visited = new Set();
    }
    if (source === null) return;
    if (visited.has(source)) return;

    visited.add(source);
    console.log(source);


    for (let node of graph[source]) {
        rDfs(graph, node, visited);
    }
}

// Idfs(graph, 'a');
rDfs(graph, 0);