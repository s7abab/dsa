class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        if (node === null)
            return 0;
        return node.height;
    }

    getBalanceFactor(node) {
        if (node === null)
            return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rotateRight(y) {
        let x = y.left;
        let T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }

    rotateLeft(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;
    }

    insertNode(node, value) {
        if (node === null)
            return new TreeNode(value);

        if (value < node.value)
            node.left = this.insertNode(node.left, value);
        else if (value > node.value)
            node.right = this.insertNode(node.right, value);
        else
            return node;

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        let balanceFactor = this.getBalanceFactor(node);

        // Left Left 
        if (balanceFactor > 1 && value < node.left.value)
            return this.rotateRight(node);

        // Right Right 
        if (balanceFactor < -1 && value > node.right.value)
            return this.rotateLeft(node);

        // Left Right 
        if (balanceFactor > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right Left 
        if (balanceFactor < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    printHelper(node, indent, last) {
        if (node !== null) {
            process.stdout.write(indent);
            if (last) {
                process.stdout.write("R----");
                indent += "   ";
            } else {
                process.stdout.write("L----");
                indent += "|  ";
            }

            console.log(node.value);

            this.printHelper(node.left, indent, false);
            this.printHelper(node.right, indent, true);
        }
    }

    print() {
        if (this.root !== null) {
            this.printHelper(this.root, "", true);
        }
    }
}

let avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

avlTree.print();
