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
  min() {
    // your code here
   
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.pop())
// => 3

console.log(stack.pop())
// => 5
stack.push(7)
console.log(stack.pop)
// console.log(stack.min())
// => 3

// stack.push(2)
// console.log(stack.min())
// => 2

// stack.pop()
// console.log(stack.min())
// => 3

module.exports = Stack
