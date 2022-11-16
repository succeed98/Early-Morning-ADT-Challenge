class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.current = null;
    this.length = 1;
  }

  // Appends the specified element to the end of this list.
  add(number) {
    // your code here
    let node = new Node(number);
    if (this.head == null) {
      this.head = node;
      return;
    } else {
      let current = this.head;
      while (current.next_node) {
        current = current.next_node;
      }
      current.next_node = node;
      this.length++;
    }
  }

  // Inserts the specified element at the specified position in this list.
  addAt(index, value) {
    if (index <= 0 || index > this.length) {
      return "out of bounds"
    } else if (index === 1) {
      let node = new Node(value)
      let current = this.head
      this.head = node
      this.head.next_node = current
    }
    else {
      let current = this.head
      let counter = 1; 
      while (counter != index - 1) {
        current = current.next_node
        counter++
      }
      // swapping
      let newNode = new Node(value)
      let currentNextNode = current.next_node 
      current.next_node = newNode
      current.next_node.next_node = currentNextNode
    }
  }

  get(index) {
    // your code here
    let counter = 1;

    if (index <= 0 || index > this.length) {
      return "Out of bounds";
    } else {
      let current = this.head;

      while (current) {
        if (counter === index) {
          return current.value;
        }
        current = current.next_node;
        counter++;
      }
    }
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
list.add(6);
list.addAt(4, 0);
console.log(list.get(2))
// // => 5

// module.exports = LinkedList;
