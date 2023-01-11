function shortestPath(edges, source, destination) {
    // build the graph 
    // traverse the graph in bfs style
    // store the distances in the queue
    if (source === destination) return 0;
    let graph = buildGraph(edges);
    let queue = [
        [source, 0]
    ];
    let visitedNodes = new Set(source);

    while (queue.length > 0) {
        let [currentNode, distance] = queue.shift();

        if (currentNode === destination) {
            return distance;
        }

        for (let neighbhour of graph[currentNode]) {

            if (visitedNodes.has(neighbhour)) continue;
            else visitedNodes.add(neighbhour);

            queue.push([neighbhour, distance + 1]);
        }
        console.log(queue);
    }
    return -1;
}

function buildGraph(edges) {
    let graphObj = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graphObj)) graphObj[a] = [];
        if (!(b in graphObj)) graphObj[b] = [];
        graphObj[a].push(b);
        graphObj[b].push(a);
    }
    return graphObj;
}

let edgesOfGraph = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];

// console.log(shortestPath(edgesOfGraph, 'w', 'z'));