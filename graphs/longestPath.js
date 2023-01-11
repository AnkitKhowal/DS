let edgesOfGraph1 = [
    [0, 1],
    [0, 3],
    [1, 2],
    [3, 7],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [5, 6],
    [6, 7],
];

const buildAdjacencyList = function (edges) {
    let graph = {};
    for (let edge of edges) {
        let a = edge[0];
        let b = edge[1];

        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const findShortestPath = function (edges, source, destination) {
    let ajList = buildAdjacencyList(edges);
    console.log(bdfGraph(ajList, source, destination))
}

const bdfGraph = function (graph, source, destination) {
    let visited = new Set();
    let result = [];
    let queue = [[source, 0]];

    while (queue.length > 0) {
        
        let curr = queue.shift();
        let node = curr[0];
        let distance = curr[1];

        if (node === destination) {
            result.push([node, distance]);
        }

        if (visited.has(node)) continue;
        else visited.add(node);

        for (let neighbour of graph[node]) {
            queue.push([neighbour, distance + 1]);
        }
        console.log(visited);
        console.log(result);
    }
    return result;
}

console.log(findShortestPath(edgesOfGraph1, 0, 7));