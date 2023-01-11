// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }


// function findTargetNode(root, targetValue, result) {
//     if (root === null) return;
//     if (root.value === targetValue) {
//         result[0] = true;
//     }
//     findTargetNode(root.left, targetValue, result);
//     findTargetNode(root.right, targetValue, result);
// }


// function findTargetNodeWithoutExtraSpace(root, targetValue) {
//     if (root === null) return false;
//     if (root.value === targetValue) return true;

//     let isValuePresentinLeft = findTargetNodeWithoutExtraSpace(root.left, targetValue);
//     let isValuePresentinRight = findTargetNodeWithoutExtraSpace(root.right, targetValue);
//     return (isValuePresentinLeft || isValuePresentinRight);
// }


// function isTargetValuePresent(root, targetValue) {
//     if (root === null) return false;
//     let queue = [root];
//     while (queue.length > 0) {
//         const current = queue.shift();
//         if (current.value === targetValue) {
//             return true;
//         }
//         if (current.left) queue.push(current.left);
//         if (current.right) queue.push(current.right);

//     }
//     return false;
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





// // let result = [false];
// // findTargetNode(a, "A", result); // true
// // console.log(result[0]);



// // // // console.log(findTargetNode(a, "x", result)); // false
// // // console.log(result[0]);


// console.log(findTargetNodeWithoutExtraSpace(a, "x"));