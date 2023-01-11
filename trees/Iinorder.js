// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }


// function IterativeInorder(root) {
//     let result = [];
//     if (root === null) return result;
//     let stack = [root];
//     let i = 0;
//     while (stack.length > 0) {
//         console.log(i++)
//         if (root.left !== null) {
//             stack.push(root.left);
//             root = root.left;
//         } else {
//             let current = stack.pop();
//             result.push(current.value);
//             if (current.right) {
//                 stack.push(current.right);
//                 root = current.right;
//             } 
//         }
//     }
//     return result;
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


// console.log(IterativeInorder(a))