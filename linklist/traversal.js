class lNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new lNode("a");
const b = new lNode("b");
const c = new lNode("c");
const d = new lNode("d");
const e = new lNode("e");

// a-> b-> c-> d-> e
a.next = b;
b.next = c;
c.next = d;
d.next = e;


function traverseLL(head) {
    let current = head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

function rTraversell(head) {
    if (head === null) return;
    console.log(head.value);
    rTraversell(head.next);
}

function linkListValues(head, result) {
    if (head === null) return
    result.push(head.value);
    linkListValues(head.next, result);
}

// traverseLL(a);
// rTraversell(a);
let result = []
linkListValues(a, result);
console.log(result);