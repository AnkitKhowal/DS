// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// function dfsRecursive(root, result) {
//     if (root === null) return;
//     result.push(root.value);
//     dfsRecursive(root.left, result);
//     dfsRecursive(root.right, result);
// }


// function dfsRecursive2(root) {
//     if (root === null) return [];
//     let leftValues = dfsRecursive2(root.left);
//     let rightValues = dfsRecursive2(root.right);
//     return [root.value, ...leftValues, ...rightValues];
// }



// function dfsIterative(root) {
//     let result = [];
//     if (root === null) return result;
//     let stack = [root];
//     while (stack.length > 0) {
//         const current = stack.pop();
//         result.push(current.value);
//         if (current.right) {
//             stack.push(current.right);
//         }
//         if (current.left) {
//             stack.push(current.left);
//         }
//     }
//     return result
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


// // console.log(dfsIterative(a));
// // let result = [];
// // dfsRecursive(a, result);
// // console.log(result);

// console.log(dfsRecursive2(a))