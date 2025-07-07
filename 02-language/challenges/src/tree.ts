class Tree<TValue> {
    private root: TreeNode<TValue>;

    constructor(root: TreeNode<TValue>) {
        this.root = root;
    }
}

class TreeNode<TValue>{
    private value: TValue;
    private root: TreeNode<TValue> | null = null;
    private children: TreeNode<TValue>[] = [];

    constructor(value: TValue){
        this.value = value;
    }

    public getValue(): TValue {
        return this.value;
    }

    public isLeaf(): boolean {
        return this.children.length === 0;
    }

    public isRoot(): boolean {
        return this.root === null;
    }
    

    public addChild(child: TreeNode<TValue>): void {
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

const root: TreeNode<string> = new TreeNode("Root");
const child1: TreeNode<string> = new TreeNode("Child 1");
const child2: TreeNode<string> = new TreeNode("Child 2");

root.addChild(child1);
root.addChild(child2);

const tree: Tree<string> = new Tree(root);

console.log(tree);