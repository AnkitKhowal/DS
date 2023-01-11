function countComponents(graph) {
    // get the list of nodes
    // Traverse the nodes 1 by 1
    // Mark the visited nodes
    // Keep incementing the count

    const nodeList = Object.keys(graph);
    let componentCount = 0;
    let visited = new Set();

    for (let node of nodeList) {
        if (visited.has(parseInt(node))) {
            continue;
        } else {
            dfs(graph, node, visited);
            componentCount++;
        }
    }
    return componentCount;
}

function dfs(graph, source, visited) {
    if (visited.has(source)) return;
    else visited.add(source);

    for (let neighbour of graph[source]) {
        dfs(graph, neighbour, visited);
    }
}



const graph4 = {
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
};

// console.log(countComponents(graph4)); //3


let graph5 = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4]
];

function createGraph(graph) {
    let ajList = {};
    for (let edge of graph) {
        let a = edge[0];
        let b = edge[1];
        if (!(a in ajList)) ajList[a] = [];
        if (!(b in ajList)) ajList[b] = [];

        ajList[a].push(b);
        ajList[b].push(a);
    }
    return ajList
}

function dfs(graph, node, visited) {
    if (node === null) return;
    for (let vertex of graph[node]) {
        if (visited.has(vertex)) continue;
        else {
            visited.add(vertex);
            dfs(graph, vertex, visited);
        }
    }

}



function countComponents1(graph5) {
    let ajList = createGraph(graph5);
    let count = 0;
    let visited = new Set();
    for (let node in ajList) {
        console.log("visted", visited);
        if (visited.has(parseInt(node))) continue;
        else {
            visited.add(parseInt(node));
            dfs(ajList, node, visited);
            count++;
        }
    }
    return count;
}

console.log(countComponents1(graph5));