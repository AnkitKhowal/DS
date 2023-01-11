
function buildGraph(edges) {
    let graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

function hasPathInUG(edges, source, destination) {
    let adjacencyList = buildGraph(edges); // convert edges to adjacency list
    return hasPath(adjacencyList, source, destination, new Set()); // traverse the graph
}

function hasPath(graph, source, destination, visited) {
    if (source === destination) return true;

    if (visited.has(source)) return false;
    visited.add(source);

    for (let neighbor of graph[source]) {
        let isEqual = hasPath(graph, neighbor, destination, visited);
        if (isEqual) {
            return true;
        }
    }
    return false;
}


// In undirected graph we would have  list of edges and we convert it first to adjacency list
let edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
];

// console.log(hasPathInUG(edges, 'i', 'n'));

function createAdjacencyList(edges) {
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
function dfs(graph, source, destination, visited, pathExists) {
    if (source === null) return;
    if (destination === null) return;

    if (visited.has(source)) return;
    visited.add(source);

    if (source === destination) {
        pathExists[0] = true;
        return;
    }

    for (let node of graph[source]) {
        dfs(graph, node, destination, visited, pathExists);
    }
    


}

function hasPath(edges, source, destination) {
    let ajList = createAdjacencyList(edges);
    let visited = new Set();
    let pathExists = [false];
    
    for (let node of ajList[source]) {
        dfs(ajList, node, destination, visited, pathExists);
    }
    return pathExists[0];
}


console.log(hasPath(edges, 'i', 'm'));