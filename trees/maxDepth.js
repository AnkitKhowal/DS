// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }


// function rMaxDepth(root) {
//     if (root === null) return 0;
//     let leftHeight = rMaxDepth(root.left);
//     let rightHeight = rMaxDepth(root.right);
//     return 1 + Math.max(leftHeight, rightHeight);
// }

// function iMaxDepth(root) {
    
// }

// const a = new TreeNode("20");
// const b = new TreeNode("30");
// const c = new TreeNode("40");
// const d = new TreeNode("5");
// const e = new TreeNode("50");
// const f = new TreeNode("60");

// a.left = b;
// a.right = c;

// b.left = d;
// b.right = e;

// c.right = f;


// console.log(rMaxDepth(a)); // 3