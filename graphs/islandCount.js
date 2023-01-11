function countIsland(grid) {
    let islandCount = 0;
    let visited = new Set();
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j].toLowerCase() === "l") {
                if (!visited.has(`${i},${j}`)) {
                    dfs(grid, i, j, visited);
                    islandCount++;
                }
            }
        }
    }
    console.log(visited);
    return islandCount;
}

function dfs(grid, i, j, visited) {
    if (i > grid.length || j > grid[0].length || i < 0 || j < 0) return;
    if (grid[i][j].toLowerCase() === 'w') return;

    if (!visited.has(`${i},${j}`)) {
        visited.add(`${i},${j}`);
        dfs(grid, i + 1, j, visited); // down
        dfs(grid, i - 1, j, visited); // up
        dfs(grid, i, j - 1, visited); // left
        dfs(grid, i, j + 1, visited); // right
    }
}

let grid = [
    ['W', "L", "W", "W", "L", "W"],
    ['l', "L", "W", "W", "L", "W"],
    ['W', "L", "W", "W", "W", "W"],
    ['W', "W", "W", "L", "L", "W"],
    ['W', "L", "W", "L", "L", "W"],
    ['W', "W", "W", "W", "W", "W"]
];

console.log(countIsland(grid));