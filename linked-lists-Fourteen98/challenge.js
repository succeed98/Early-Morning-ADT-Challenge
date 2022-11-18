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
    while (counter != index - 1) {
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
  }

  addFirst(value) {
    if (this.head == null) {
      let newNode = new Node(value);
      this.head == newNode;
      return;
    }

    let currNode = this.head;
    this.head = new Node(value);
    this.head.next_node = currNode;
  }

  //remove all values in the list
  clear() {
    if (this.head == null) return;

    while (this.head != null) {
      if (this.head.next_node != null) {
        this.length--;
      }
      this.head = this.head.next_node;
    }

    console.log(this.length);
  }

  //returns true or false when the list contains the given value
  contains(value) {
    if (this.head == null) return false;

    let current = this.head;

    while (current.next_node) {
      if (current.value == value) {
        return true;
      }

      current = current.next_node;
    }

    return false;
  }

  // retrives the first element of the list
  element() {
    if (this.head == null) {
      return;
    }

    return this.head.value;
  }

  // addAllAt(index, elements) {
  //   for (let i = 0; i < elements.length; i++) {
  //     this.addAt(index, elements[i]);
  //     index++;
  //   }
  // }

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
list.addFirst(10);

// list.addAllAt(2, [10, 19, 20]);

// list.clear();
// console.log(list.contains(3));
//list.addAll([]);
console.log(list.get(5));
// // => 5

// module.exports = LinkedList;
