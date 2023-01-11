class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isSymetric(root, isSame) {
    if (root === null) return false;
    areSame(root.left, root.right, isSame);
    return isSame[0];

}

// function areSame(rootLeft, rootRight) {
//     if (rootLeft === null || rootRight === null) {
//         return rootLeft === rootRight;
//     }
//     if (rootLeft.value !== rootRight.value) return false;
//     let areLeftSame = areSame(rootLeft.left, rootRight.right);
//     let areRightSame = areSame(rootLeft.right, rootRight.left);
//     return areLeftSame && areRightSame;
// }

function areSame(rootLeft, rootRight, isSame) {
    if (rootLeft === null || rootRight === null) return;
    if (rootLeft.value !== rootRight.value) isSame[0] = false;
    areSame(rootLeft.left, rootRight.right, isSame);
    areSame(rootLeft.right, rootRight.left, isSame);
}


const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("b");
const d = new TreeNode("c");
const e = new TreeNode("d");
const f = new TreeNode("d");
const g = new TreeNode("c");



a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

let isSame = [true];
console.log(isSymetric(a, isSame));