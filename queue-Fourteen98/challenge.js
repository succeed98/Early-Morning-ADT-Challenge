// Start with your code from LinkedList challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}
class Queue {
  //values can only be appended to the end of the list
  add(number) {
    // your code here
    if (this.head == null) {
      this.head = new Node(number);
      return this.head.value;
    }

    let current = this.head;

    while (current.next_node) {
      current = current.next_node;
    }

    current.next_node = new Node(number);
    return current.next_node.value;
  }

  //values can only be removed from the start of the list
  remove() {
    // your code here
    if (this.head == null) return -1;

    let current = this.head;
    let head = this.head.value;
    if (current.next_node != null) {
      this.head = current.next_node;
      return head;
    } else {
      this.head = null;
      return head;
    }
  }
}

const queue = new Queue();

queue.add(3);
queue.add(5);
console.log(queue.remove());
// => 3

queue.add(2);
queue.add(7);
console.log(queue.remove());
// => 5

console.log(queue.remove());
// => 2

console.log(queue.remove());
// => 7

console.log(queue.remove());

// => -1

module.exports = Queue;
