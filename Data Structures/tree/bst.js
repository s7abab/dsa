// node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// binary search tree
class Bst {
  constructor() {
    this.root = null;
  }
  // check tree is empty
  isEmpty() {
    return this.root === null;
  }
  // insert
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  // insert node
  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        return this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        return this.insertNode(root.right, node);
      }
    }
  }
  // search
  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else {
      if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  // pre order
  preorder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }
  // in order
  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }
  // post order
  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }
  // level order
  levelorder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  // min value
  minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }
  // max value
  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxValue(root.right);
    }
  }
  // delete value
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  // delete node
  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.minValue(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new Bst();
bst.insert(10);
bst.insert(5);
bst.insert(12);
bst.delete(10);
bst.inorder(bst.root);
