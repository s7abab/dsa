

// const arr = [423, 1231, 5, 1, 0, 42];

// console.time()
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const left = [];
//   const right = [];
//   const pivot = arr[arr.length - 1];

//   for (let i = 0; i < arr.length-1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort(arr));
// console.timeEnd()
// merge sort

// const arr = [423, 1231, 5, 1, 0, 42];

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   const sortedLeft = mergeSort(left);
//   const sortedRight = mergeSort(right);

//   return merge(sortedLeft, sortedRight);
// }

// function merge(left, right) {
//   const sorted = [];

//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       sorted.push(left.shift());
//     } else {
//       sorted.push(right.shift());
//     }
//   }
//   sorted.push(...left, ...right);
//   return sorted;
// }
// console.log(mergeSort(arr));

// Linked List
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   prepend(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.size++;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.size++;
//   }

//   remove(value) {
//     if (this.head.value === value) {
//       this.head = this.head.next;
//       return;
//     }
//     let curr = this.head;
//     let prev = this.head;
//     while (curr.value !== value) {
//       prev = curr;
//       curr = curr.next;
//     }
//     prev.next = curr.next;
//   }

//   reverse() {
//     let prev = null;
//     let curr = this.head;

//     while (curr) {
//       let next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("List is empty");
//       return;
//     }
//     let curr = this.head;
//     while (curr) {
//       console.log(curr.value);
//       curr = curr.next;
//     }
//   }
// }

// const list = new LinkedList();
// list.append(30);
// list.prepend(20);
// list.prepend(10);
// list.prepend(500);
// list.prepend(600);
// list.print();
// list.reverse();
// list.print();

// class Stack {
//   constructor() {
//     this.queue1 = [];
//     this.queue2 = [];
//   }

//   push(item) {
//     this.queue1.push(item);
//   }

//   pop() {
//     if (!this.queue1.length) {
//       return null;
//     }

//     while (this.queue1.length > 1) {
//       this.queue2.push(this.queue1.shift());
//     }

//     let poppedItem = this.queue1.pop();

//     // swap
//     [this.queue1, this.queue2] = [this.queue2, this.queue1];

//     return poppedItem;
//   }
// }

// const stack = new Stack();
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)

// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())

// const arr = [1, 2, 3, 4, 253, 52235, 532514541];

// function binarySearch(arr, item) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === item) {
//       return mid;
//     }
//     if (item < arr[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return null;
// }

// console.log(binarySearch(arr, 532514541));

// binary search recursion
// const arr = [1, 2, 3, 4, 253, 52235, 532514541];

// function binarySearch(arr, item, left, right) {
//   if (left > right) {
//     return -1;
//   }

//   let mid = Math.floor((left + right) / 2);
//   if (arr[mid] === item) {
//     return mid;
//   }

//   if (item < arr[mid]) {
//     return binarySearch(arr, item, left, mid - 1);
//   } else {
//     return binarySearch(arr, item, mid + 1, right);
//   }
// }

// console.log(binarySearch(arr, 52235, 0, arr.length - 1));
