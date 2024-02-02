class MinHeap {
  constructor() {
    this.heap = [];
  }

  leftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  rightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  parentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.leftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.rightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.parentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.rightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.parentIndex(index)];
  }

  peek() {
    if (this.heap.length === 0) {
      console.log("Heap is empty");
      return;
    }
    return this.heap[0];
  }

  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (this.hasParent(index && this.parent(index) > this.heap[index])) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;

    while (this.hasLeftChild(index)) {
      let smallChildIndex = this.leftChildIndex(index);
      if (
        this.hasRightChild &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallChildIndex = this.rightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallChildIndex]) {
        break;
      } else {
        this.swap(index, smallChildIndex);
      }
      index = smallChildIndex;
    }
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  poll() {
    if (this.heap.length === 0) {
      console.log("Heap is empty");
      return;
    }
    let item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }
}

const heap = new MinHeap();

heap.add(2);
heap.add(10);
heap.add(3);
heap.add(1);
heap.add(111);

console.log(heap.heap);
