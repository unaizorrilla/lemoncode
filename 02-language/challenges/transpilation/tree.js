class Tree {
    constructor(root) {
        this.root = root;
    }
}
class TreeNode {
    constructor(value) {
        this.root = null;
        this.children = [];
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    isLeaf() {
        return this.children.length === 0;
    }
    isRoot() {
        return this.root === null;
    }
    addChild(child) {
        if (child === this) {
            throw new Error("Cannot add a node as its own child.");
        }
        if (child.root !== null) {
            throw new Error("Child already has a parent.");
        }
        child.root = this;
        this.children.push(child);
    }
}
const root = new TreeNode("Root");
const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");
root.addChild(child1);
root.addChild(child2);
const tree = new Tree(root);
console.log(tree);
