// Optionally: start with your code from LinkedList challenge.

class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(number) {
    // your code here
    let newNode = new Node(number);
    if (this.head == null) {
      this.head = newNode;
      this.length++;
    } else {
      let current = this.head;
      while (current.next_node) {
        current = current.next_node;
      }
      current.next_node = newNode;
      this.length++;
    }
  }

  pop() {
    // your code here
    if (this.head == null) return;
    let current = this.head;
    let previous = this.head;
    while (current.next_node) {
      previous = current;
      current = current.next_node;
    }

    let popped = current.value;
    previous.next_node = null;
    this.length--;
    return popped;
  }

  empty() {
    if (this.head == null) return true;
    return false;
  }

  peek() {
    if (this.head == null) return;

    let value = this.head.value;

    return value;
  }

  search(value) {
    let count = 1;
    if (this.head == null) return -1; 
    let current = this.head
    while (current.value != value) {
      count++
      current = current.next_node
      if (count == this.length) {
        return -1;
      }
    }
    return count
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(1);
console.log(stack.search(0));
// console.log(stack.pop());
// => 5

// stack.push(2);
// stack.push(7);
// console.log(stack.pop());
// // => 7

// console.log(stack.pop());
// // => 2

// console.log(stack.pop());
// => 3

module.exports = Stack;
