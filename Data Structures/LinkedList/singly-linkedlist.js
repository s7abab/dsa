class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) return;
    const newNode = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    newNode.next = prev.next;
    prev.next = newNode;
    this.size++;
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    this.tail = this.head ? this.head : null;
  }

  reverseRec() {
    if (!this.head) {
        return;
    }

    const reverseUtil = (curr, prev) => {
        if (!curr) {
            this.head = prev;
            return;
        }

        const next = curr.next;
        curr.next = prev;
        reverseUtil(next, curr);
    };

    reverseUtil(this.head, null);
    this.tail = this.head; // Update tail
}

  sort() {
    let temp;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      while (next) {
        if (curr.value > next.value) {
          temp = curr.value;
          curr.value = next.value;
          next.value = temp;
        }
        next = next.next;
      }
      curr = curr.next;
    }
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }

  mergeSort() {
    if (this.size <= 1) {
      return this.head;
    }

    const middle = this.getMiddleNode();
    const leftList = new LinkedList();
    const rightList = new LinkedList();

    // Split the list into two halves
    leftList.head = this.head;
    leftList.tail = middle;
    leftList.size = Math.ceil(this.size / 2);

    rightList.head = middle.next;
    rightList.tail = this.tail;
    rightList.size = Math.floor(this.size / 2);

    middle.next = null; // Break the link between the two halves

    // Recursively sort the two halves
    leftList.mergeSort();
    rightList.mergeSort();

    // Merge the sorted halves
    this.head = this.merge(leftList.head, rightList.head);
    this.tail = rightList.tail;
  }

  // Helper method to get the middle node of the list
  getMiddleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  // Helper method to merge two sorted linked lists
  merge(left, right) {
    const dummy = new Node(null);
    let current = dummy;

    while (left && right) {
      if (left.value < right.value) {
        current.next = left;
        left = left.next;
      } else {
        current.next = right;
        right = right.next;
      }
      current = current.next;
    }

    current.next = left || right;

    return dummy.next;
  }
}

const list = new LinkedList();
list.append(400);
list.append(3);
list.append(50);
list.append(0);
list.append(11);
list.remove(-1)
list.reverseRec()
list.print();
