class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
        return this;
      }
  
      let current = this.root;
  
      while (true) {
        if (value === current.value) {
          // Value already exists in the tree
          return undefined;
        }
  
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  
    find(value) {
      if (!this.root) {
        return false;
      }
  
      let current = this.root;
      let found = false;
  
      while (current && !found) {
        if (value === current.value) {
          found = true;
        } else if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
  
      return found;
    }

    delete(value) {
      const removeNode = (node, value) => {
        if (!node) {
          return null;
        }
  
        if (value < node.value) {
          node.left = removeNode(node.left, value);
        } else if (value > node.value) {
          node.right = removeNode(node.right, value);
        } else {
          // Node with only one child or no child
          if (!node.left) {
            return node.right;
          } else if (!node.right) {
            return node.left;
          }
  
          // Node with two children
          node.value = this.findMinValue(node.right);
          node.right = removeNode(node.right, node.value);
        }
  
        return node;
      };
    }
  }
  
  // Example usage:
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(2);
  bst.insert(7);
  bst.insert(12);
  bst.insert(20);
  
  console.log(bst.find(5)); 
  console.log(bst.find(8)); 
  