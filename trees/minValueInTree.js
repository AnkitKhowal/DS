// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// function minValue(root, min) {
//     if (root === null) return;
//     if (parseInt(root.value) < min[0]) {
//         min[0] = root.value;
//     }

//     minValue(root.left, min);
//     minValue(root.right, min);
// }

// function anotherMinValue(root) {
//     if (root === null) return Infinity;
//     let leftValue = anotherMinValue(root.left);
//     let rightValue = anotherMinValue(root.right);
//     return Math.min(root.value, leftValue, rightValue);
// }


// function iterativeMinValue(root) {
//     if (root === null) return 0;
//     let queue = [root];
//     let minSoFar = parseInt(root.value);
//     while (queue.length > 0) {
//         const current = queue.shift();
//         if (parseInt(current.value) < minSoFar) minSoFar = current.value;
//         if (current.left) queue.push(current.left);
//         if (current.right) queue.push(current.right);
//     }
//     return minSoFar;
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

// // let minSoFar = [parseInt(a.value)];
// // console.log(minValue(a, minSoFar)); // 5
// // console.log(minSoFar[0])


// // console.log(anotherMinValue(a));

// console.log(iterativeMinValue(a));