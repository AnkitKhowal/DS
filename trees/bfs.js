// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }


// function bfsTraversal(root) {
//     let result = [];
//     if (root === null) return result;
//     let stack = [root];
//     while (stack.length > 0) {
//         const current = stack.shift();
//         result.push(current.value);
//         if (current.left) stack.push(current.left);
//         if (current.right) stack.push(current.right);
//     }
//     return result;
// }

// const a = new TreeNode("a");
// const b = new TreeNode("b");
// const c = new TreeNode("c");
// const d = new TreeNode("d");
// const e = new TreeNode("e");
// const f = new TreeNode("f");

// a.left = b;
// a.right = c;

// b.left = d;
// b.right = e;

// c.right = f;


// console.log(bfsTraversal(a));