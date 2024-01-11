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

  prepend (value){
    const newNode = new Node(value);
    if(!this.head){
        this.head= newNode;
        this.tail = newNode
    }else{
        newNode.next = this.head;
        this.head = newNode
    }
    this.size++;
  }

  remove (value){
    let curr = this.head;
    let prev = curr;
    while(curr!==null){
        if(curr.value === value){
            curr = curr.next;
            prev = curr;
            this.size --;
        }
        prev = curr;
        curr = curr.next
    }
  }
  print() {
    let curr = this.head;
    while (curr !== null) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(4);
list.remove(2);
list.print();
