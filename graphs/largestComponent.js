function largestComponent(graph) {
    let largestComponent = -Infinity;
    let visitedNodes = new Set();

    for (let key in graph) {
        if (visitedNodes.has(parseInt(key))) {
            continue;
        } else {
            let nodeCount = dfs(graph, key, visitedNodes);
            console.log(nodeCount);
            if (nodeCount > largestComponent) {
                largestComponent = nodeCount;
            }
        }
    }
    return largestComponent;
}

function dfs(graph, source, visitedNodes) {
    if (visitedNodes.has(source)) return;
    else visitedNodes.add(source);

    let componentLength = 1;
    for (let neighbhour of graph[source]) {
        componentLength++;
        dfs(graph, neighbhour, visitedNodes);
    }
    return componentLength;
}

const graph5 = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
};

const largestComponent1 = (graph) => {
    let max = -Infinity;
    let visited = new Set();

    for (let node in graph) {
        if (visited.has(parseInt(node))) continue;
        else {
            let count = dfs1(graph, parseInt(node), visited);
            if (count > max) {
                max = count;
            }
        }
    }
    return max;
};

const dfs1 = (graph, node, visited) => {
    if (visited.has(node)) return;

    visited.add(node);
    let componentLen = 1;
    
    for (let vertex of graph[node]) {
        componentLen++;
        dfs1(graph, vertex, visited);

    }
    return componentLen;
}


console.log(largestComponent1(graph5));