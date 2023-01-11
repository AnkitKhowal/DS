function smallestIsland(grid) {
    let smallestIsland = Infinity;
    let visited = new Set();
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j].toLowerCase() === 'l') {
                if (!visited.has(`${i},${j}`)) {
                    let count = [0];
                    dfs(grid, i, j, visited, count);
                    if (count[0] < smallestIsland) {
                        smallestIsland = count[0];
                    }
                }
            }
        }
    }
    return smallestIsland;
}

function dfs(grid, i, j, visited, count) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid.length) return;
    if (grid[i][j].toLowerCase() === 'w') return;
    if (!visited.has(`${i},${j}`)) {
        visited.add(`${i},${j}`);
        count[0]++;
        dfs(grid, i - 1, j, visited, count); // up
        dfs(grid, i + 1, j, visited, count); // down
        dfs(grid, i, j - 1, visited, count); //left
        dfs(grid, i, j + 1, visited, count); // right
        return count;
    }
}


let grid1 = [
    ['W', "L", "W", "W", "L", "L"],
    ['l', "L", "L", "W", "L", "W"],
    ['W', "L", "W", "W", "W", "W"],
    ['W', "W", "W", "L", "L", "W"],
    ['W', "L", "W", "L", "L", "W"],
    ['W', "L", "W", "W", "W", "W"]
];

console.log(smallestIsland(grid1));