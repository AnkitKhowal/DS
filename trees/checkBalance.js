// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }


// function isBalancedBinaryTree(root, result) {
//     if (root === null) return 0;
//     let leftHeight = isBalancedBinaryTree(root.left, result);
//     let rightHeight = isBalancedBinaryTree(root.right, result);
//     if (Math.abs(leftHeight - rightHeight) > 1) {
//         result[0] = false
//     }
//     return 1 + Math.max(leftHeight, rightHeight);
// }

// const a = new TreeNode("20");
// const b = new TreeNode("30");
// const c = new TreeNode("40");
// const d = new TreeNode("5");
// const e = new TreeNode("50");
// const f = new TreeNode("60");
// const g = new TreeNode("70");
// const h = new TreeNode("80");
// const i = new TreeNode("90");

// a.left = b;
// a.right = c;

// b.left = d;
// b.right = e;

// c.right = f;
// f.right = g;
// g.right = h;
// h.right = i;


// let result = [true];
// isBalancedBinaryTree(a, result);
// console.log(result[0])