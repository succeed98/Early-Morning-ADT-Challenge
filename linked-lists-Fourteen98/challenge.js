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
    if (index <= 0 || index > this.length + 1) {
      return "out of bounds";
    } else if (index === 1) {
      let node = new Node(value);
      let current = this.head;
      this.head = node;
      this.head.next_node = current;
    }
    let current = this.head;
    let counter = 1;
    console.log(index)
    while (counter != index - 1) {
      console.log(current)
      current = current.next_node;
      counter++;
    }
    // swapping
    let newNode = new Node(value);
    let currentNextNode = current.next_node;
    current.next_node = newNode;
    current.next_node.next_node = currentNextNode;
    this.length++;
  }

  /* Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection’s iterator.
boolean	addAll(int index, Collection<? extends E> c) */
  addAll(arr) {
    //check if the head is null
    let current = this.head;
    for (let i = 1; i < arr.length; i++) {
      this.add(arr[i]);
    }
    this.length = this.length + arr.length;
  }

  // Inserts all of the elements in the specified collection into this list, starting at the specified position.
  addAllAt(index, arr) {
    let incrementIndex = index;
    for (let i = 0; i <= arr.length; i++){
      this.addAt(incrementIndex, arr[i])
      incrementIndex++;
    }
    this.length = this.length + arr.length;
  }

  // Appends the specified element to the end of this list.
  addLast(value) {
    this.current = this.head
    if (this.head == null) {
      this.head == new Node(value)
    } else {
      while (this.current.next_node) {
        this.current = this.current.next_node
      }
      this.current = new Node(value)
    }
    this.length++;
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
// list.addAt(4, 0);
list.addAllAt(3, [1, 2, 3])
// console.log(list.get(4));
// // => 5

// module.exports = LinkedList;
