// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }


// function allNodeSum(root) {
//     if (root === null) return 0;
//     let leftSum = allNodeSum(root.left);
//     let rightSum = allNodeSum(root.right);
//     return parseInt(root.value) + parseInt(leftSum) + parseInt(rightSum);
// }

// function treeSumIterative(root) {
//     if (root === null) return 0;
//     let queue = [root];
//     let totalSum = 0;
//     while (queue.length > 0) {
//         let current = queue.shift();
//         totalSum += parseInt(current.value);
//         if (current.left) queue.push(current.left);
//         if (current.right) queue.push(current.right);
//     }
//     return totalSum;
// }

// const a = new TreeNode("10");
// const b = new TreeNode("20");
// const c = new TreeNode("30");
// const d = new TreeNode("40");
// const e = new TreeNode("50");
// const f = new TreeNode("60");

// a.left = b;
// a.right = c;

// b.left = d;
// b.right = e;

// c.right = f;



// // console.log(allNodeSum(a));
// console.log(treeSumIterative(a));