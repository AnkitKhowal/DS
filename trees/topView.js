class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


const a = new TreeNode("10");
const b = new TreeNode("20");
const c = new TreeNode("30");
const d = new TreeNode("40");
const e = new TreeNode("50");
const f = new TreeNode("60");

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;


function topView(root) {
    let queue = [[root, 0]];
    let levelSet = new Set();
    let result = [];

    while (queue.length > 0) {
        let [currentNode, level] = queue.shift();

        if (!(levelSet.has(level))) {
            levelSet.add(level);
            result.push(currentNode.value);
        }

        if (currentNode.right) {
            queue.push([currentNode.right, level + 1]);
        }

        if (currentNode.left) {
            queue.push([currentNode.left, level - 1]);
        }

    }
    return result;
}

console.log(topView(a));