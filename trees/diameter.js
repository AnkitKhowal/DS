// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }


// function tDiatemeter(root, maxValue) {
//     if (root == null) return 0;
//     let leftHeight = tDiatemeter(root.left, maxValue);
//     let rightHeight = tDiatemeter(root.right, maxValue);
//     let sumPath = leftHeight + rightHeight;
//     maxValue[0] = Math.max(maxValue[0], sumPath);
//     return 1 + Math.max(leftHeight, rightHeight);
// }


// const a = new TreeNode("a");
// const b = new TreeNode("b");
// const c = new TreeNode("c");
// const d = new TreeNode("d");
// const e = new TreeNode("e");
// const f = new TreeNode("f");
// const g = new TreeNode("g");
// const h = new TreeNode("h");
// const i = new TreeNode("i");
// const j = new TreeNode("j");
// const k = new TreeNode("k");
// const l = new TreeNode("l");
// const x = new TreeNode("x");


// a.left = b;
// a.right = c;

// b.left = d;
// b.right = e;
// d.left = x;

// c.left = f;
// c.right = g;

// f.left = h;
// f.right = i;
// g.left = j;
// g.right = k;
// j.left = l;


// let maxValue = [0];
// tDiatemeter(a, maxValue);
// console.log(maxValue[0]);